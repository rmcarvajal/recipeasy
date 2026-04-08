import { Navbar } from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {

const navigate = useNavigate()

  return (
    <div className="profile-container">
      <Navbar />
      
      <main className="profile-card">
        <div className="user-info">
          <div className="avatar-placeholder"></div>
          
          <div className="user-details">
            <h2>Sarah Martinez</h2>
            <p>sarah.martinez@email.com</p>
            <p>Joined March 2026</p>
            <p style={{ marginTop: '15px', color: '#444' }}>
              Home cook passionate about healthy recipes and meal planning.
            </p>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn-edit">Edit Profile</button>
          <button className="btn-logout" onClick={() => navigate("/login")}>Log out</button>
        </div>
      </main>
    </div>
  );
};

export default Profile;