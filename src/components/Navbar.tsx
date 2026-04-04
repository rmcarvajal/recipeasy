import { Link } from 'react-router-dom'; 
import '../pages/home/Home.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'white' }}>
        Recipeasy
      </Link>
      
      <div className="nav-links">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <span style={{ opacity: 0.7 }}>Recipes</span> {/* Aún no tenemos esta página */}
        <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link>
      </div>
    </nav>
  );
};