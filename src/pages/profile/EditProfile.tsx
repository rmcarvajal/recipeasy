import { useState, useEffect, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import './EditProfile.css';

const EditProfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Sarah Martinez');
  const [profilePic, setProfilePic] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem('user_name');
    const savedPic = localStorage.getItem('user_profile_pic');
    if (savedName) setName(savedName);
    if (savedPic) setProfilePic(savedPic);
  }, []);

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
    localStorage.setItem('user_name', name);
    if (profilePic) {
      localStorage.setItem('user_profile_pic', profilePic);
    }
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

        <div className="edit-actions">
          <button className="btn-save" onClick={handleSave}>Save Changes</button>
          <button className="btn-cancel" onClick={() => navigate('/profile')}>Cancel</button>
        </div>
      </main>
    </div>
  );
};

export default EditProfile;
