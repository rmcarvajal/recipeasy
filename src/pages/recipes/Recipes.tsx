import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../../components/Navbar';
import { MealCard } from '../../components/cards.meal/Card.meal';
import { RecipeInfo } from '../../components/recipe.info/RecipeInfo';
import { fetchRecipesAsync, deleteRecipeAsync, clearRecipesAsync, setSearchTerm as setReduxSearchTerm } from '../../store/slices/recipesSlice';
import type { RootState, AppDispatch } from '../../store';
import type { MealAPI } from '../../types/meal';
import './Recipes.css';

const Recipes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { items: recipes, loading, searchTerm } = useSelector((state: RootState) => state.recipes);
  
  const [selectedMeal, setSelectedMeal] = useState<MealAPI | null>(null);

  useEffect(() => {
    dispatch(fetchRecipesAsync(searchTerm));
  }, [dispatch, searchTerm]);

  const handleSearch = () => {
    dispatch(fetchRecipesAsync(searchTerm));
  };

  const handleSearchChange = (val: string) => {
    dispatch(setReduxSearchTerm(val));
  };

  const handleDeleteAllLocal = () => {
    if (window.confirm('Are you sure you want to delete ALL your custom recipes?')) {
      dispatch(clearRecipesAsync());
      dispatch(fetchRecipesAsync(searchTerm));
    }
  };

  const handleDeleteOne = (id: string) => {
    dispatch(deleteRecipeAsync(id));
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
            onChange={(e) => handleSearchChange(e.target.value)}
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
                <MealCard meal={meal} onClick={() => setSelectedMeal(meal)} />
                {meal.idMeal.length > 10 && (
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

      {selectedMeal && (
        <RecipeInfo 
          meal={selectedMeal} 
          onClose={() => setSelectedMeal(null)} 
        />
      )}
    </div>
  );
};

export default Recipes;