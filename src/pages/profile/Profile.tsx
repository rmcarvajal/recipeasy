import { Navbar } from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout as logoutAction } from '../../store/slices/userSlice';
import type { RootState } from '../../store';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, profilePic } = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };

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
          <button className="btn-logout" onClick={handleLogout}>Log out</button>
        </div>
      </main>
    </div>
  );
};

export default Profile;