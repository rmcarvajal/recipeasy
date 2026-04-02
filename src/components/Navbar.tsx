import '../pages/Home.css'; 

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Recipeasy</div>
      <div className="nav-links">
        <span>Home</span>
        <span>Recipes</span>
        <span>Profile</span>
      </div>
    </nav>
  );
};