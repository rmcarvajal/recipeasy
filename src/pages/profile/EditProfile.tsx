import { useState, useEffect, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../store/slices/userSlice';
import type { RootState } from '../../store';
import { Navbar } from '../../components/Navbar';
import './EditProfile.css';

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  
  const [name, setName] = useState(user.name);
  const [profilePic, setProfilePic] = useState<string | null>(user.profilePic);
  const [diet, setDiet] = useState(user.diet);
  const [skillLevel, setSkillLevel] = useState(user.skillLevel);

  useEffect(() => {
    setName(user.name);
    setProfilePic(user.profilePic);
    setDiet(user.diet);
    setSkillLevel(user.skillLevel);
  }, [user]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    dispatch(updateProfile({ name, profilePic, diet, skillLevel }));
    navigate('/profile');
  };

  return (
    <div className="edit-profile-container">
      <Navbar />
      
      <main className="edit-profile-card">
        <h2>Edit Profile</h2>
        
        <div className="edit-avatar-section">
          <div className="avatar-preview">
            {profilePic ? (
              <img src={profilePic} alt="Profile" />
            ) : (
              <div className="avatar-placeholder-text">{name.charAt(0)}</div>
            )}
          </div>
          <label className="image-upload-label">
            Change Photo
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              style={{ display: 'none' }}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="diet">Dietary Preference</label>
          <select 
            id="diet" 
            className="form-select"
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
          >
            <option value="Any">Any</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Keto">Keto</option>
            <option value="Gluten-Free">Gluten-Free</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="skillLevel">Cooking Skill Level</label>
          <select 
            id="skillLevel" 
            className="form-select"
            value={skillLevel}
            onChange={(e) => setSkillLevel(e.target.value)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Chef">Chef</option>
          </select>
        </div>

        <div className="edit-actions">
          <button className="btn-save" onClick={handleSave}>Save Changes</button>
          <button className="btn-cancel" onClick={() => navigate('/profile')}>Cancel</button>
        </div>
      </main>
    </div>
  );
};

export default EditProfile;
