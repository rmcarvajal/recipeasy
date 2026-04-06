import { Link } from 'react-router-dom'; 
import '../pages/home/Home.css';
import logo from "../assets/logo.svg"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" >
        <img src={logo} className='logo'/>
      </Link>
      
      <div className="nav-links">
        <Link to="/" style={{ color: 'white' }}>Home</Link>
        <Link to="/recipes" style={{ color: 'white' }}>Recipes</Link>        
        <Link to="/profile" style={{ color: 'white' }}>Profile</Link>
      </div>
    </nav>
  );
};