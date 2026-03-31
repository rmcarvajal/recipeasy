export const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '20px 50px', 
      backgroundColor: '#FF7A50', 
      color: 'white' 
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '24px' }}>Recipeasy</div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <span>Home</span>
        <span>Recipes</span>
        <span>Profile</span>
      </div>
    </nav>
  );
};