import { Navbar } from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Sarah Martinez');
  const [profilePic, setProfilePic] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem('user_name');
    const savedPic = localStorage.getItem('user_profile_pic');
    if (savedName) setName(savedName);
    if (savedPic) setProfilePic(savedPic);
  }, []);

  return (
    <div className="profile-container">
      <Navbar />
      
      <main className="profile-card">
        <div className="user-info">
          {profilePic ? (
            <img src={profilePic} alt={name} className="profile-avatar" />
          ) : (
            <div className="avatar-placeholder">{name.charAt(0)}</div>
          )}
          
          <div className="user-details">
            <h2>{name}</h2>
            <p>sarah.martinez@email.com</p>
            <p>Joined March 2026</p>
            <p style={{ marginTop: '15px', color: '#444' }}>
              Home cook passionate about healthy recipes and meal planning.
            </p>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn-edit" onClick={() => navigate("/profile/edit")}>Edit Profile</button>
          <button className="btn-logout" onClick={() => navigate("/login")}>Log out</button>
        </div>
      </main>
    </div>
  );
};

export default Profile;