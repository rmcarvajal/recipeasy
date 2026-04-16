import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { MealCard } from '../../components/cards.meal/Card.meal';
import { getMeals } from '../../services/mealService';
import { getCustomRecipes, deleteRecipe, clearAllRecipes } from '../../services/recipeService';
import type { MealAPI } from '../../types/meal';
import './Recipes.css';

const Recipes = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<MealAPI[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (search: string = '') => {
    setLoading(true);
    const apiMeals = await getMeals(search);
    const localRecipes = getCustomRecipes();
    
    // Combine them, filter local by search if needed
    const filteredLocal = localRecipes.filter(r => 
      r.strMeal.toLowerCase().includes(search.toLowerCase())
    );

    setRecipes([...filteredLocal, ...apiMeals]);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSearch = () => {
    fetchRecipes(searchTerm);
  };

  const handleDeleteAllLocal = () => {
    if (window.confirm('Are you sure you want to delete ALL your custom recipes?')) {
      clearAllRecipes();
      fetchRecipes(searchTerm);
    }
  };

  const handleDeleteOne = (id: string) => {
    deleteRecipe(id);
    fetchRecipes(searchTerm);
  };

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="search-bar-button" onClick={handleSearch}>Search</button>
        </div>

        <div className="recipes-actions">
          <button className="btn-add" onClick={() => navigate('/recipes/add')}>
            + Add Recipe
          </button>
          <button className="btn-delete" onClick={handleDeleteAllLocal}>
            🗑️ Delete All Local
          </button>
        </div>

        {loading ? (
          <div className="loading-state">Loading delicious recipes...</div>
        ) : (
          <div className="recipes-grid">
            {recipes.map((meal) => (
              <div key={meal.idMeal} className="recipe-card-wrapper">
                <MealCard meal={meal} />
                {meal.idMeal.length > 10 && ( // Simple check for local ID (timestamp)
                  <button 
                    className="delete-card-btn" 
                    onClick={() => handleDeleteOne(meal.idMeal)}
                    title="Delete local recipe"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
        
        {!loading && recipes.length === 0 && (
          <div className="no-results">No recipes found. Try adding your own!</div>
        )}
      </main>
    </div>
  );
};

export default Recipes;