import { Navbar } from '../../components/Navbar';
import './Recipes.css';

const Recipes = () => {
  return (
    <div className="recipes-container">
      <Navbar />
      
      <main className="recipes-content">
        <h1 className="recipes-title">Our Recipes</h1>

        <div className="search-bar-container">
          <input 
            type="text" 
            placeholder="Search for specific recipes..." 
            className="search-bar-input"
          />
          <button className="search-bar-button">Search</button>
        </div>

        <div className="recipes-actions">
          <button className="btn-add">+ Add Recipe</button>
          <button className="btn-delete">🗑️ Delete Recipe</button>
        </div>
      </main>
    </div>
  );
};

export default Recipes;