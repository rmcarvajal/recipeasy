import './RecipeInfo.css';
import type { MealAPI } from '../../types/meal';

interface RecipeInfoProps {
  meal: MealAPI;
  onClose: () => void;
}

export const RecipeInfo = ({ meal, onClose }: RecipeInfoProps) => {
  const getAPIIngredients = (meal: any) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const name = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (name && name.trim()) {
        ingredients.push({ name, measure });
      }
    }
    return ingredients;
  };

  const apiIngredients = meal.ingredients ? [] : getAPIIngredients(meal);

  return (
    <div className="recipe-info-overlay" onClick={onClose}>
      <div className="recipe-info-modal" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close-modal" onClick={onClose}>✕</button>
        
        <div className="modal-hero">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="modal-hero-image" />
          <div className="modal-hero-overlay">
            <span className="modal-category-badge">{meal.strCategory}</span>
            <h1>{meal.strMeal}</h1>
            {meal.timeEstimate && <p style={{marginTop: '5px'}}>⏱️ {meal.timeEstimate}</p>}
          </div>
        </div>

        <div className="modal-body">
          {meal.description && (
            <div style={{marginBottom: '30px'}}>
              <h2 className="section-title">Description</h2>
              <p className="instructions-text">{meal.description}</p>
            </div>
          )}

          <div className="info-grid">
            <aside className="ingredients-section">
              <h2 className="section-title">Ingredients</h2>
              <ul className="ingredients-list">
                {meal.ingredients ? (
                  // Custom local ingredients
                  meal.ingredients.map((ing, idx) => (
                    <li key={idx} className="ingredient-item">
                      <span className="ingredient-name">{ing.name}</span>
                      <span className="ingredient-measure">{ing.quantity} {ing.measure}</span>
                    </li>
                  ))
                ) : (
                  // API ingredients
                  apiIngredients.map((ing, idx) => (
                    <li key={idx} className="ingredient-item">
                      <span className="ingredient-name">{ing.name}</span>
                      <span className="ingredient-measure">{ing.measure}</span>
                    </li>
                  ))
                )}
              </ul>
            </aside>

            <main className="preparation-section">
              <h2 className="section-title">Preparation</h2>
              
              {meal.steps ? (
                // Custom local steps
                <div className="steps-list">
                  {meal.steps.map((step, idx) => (
                    <div key={idx} className="step-card">
                      <span className="step-number">Step {idx + 1}</span>
                      <p className="instructions-text">{step.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                // API instructions
                <p className="instructions-text">
                  {meal.strInstructions || 'No instructions available.'}
                </p>
              )}
            </main>
          </div>
        </div>

        {meal.strYoutube && (
          <footer className="modal-footer">
            <a 
              href={meal.strYoutube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-youtube-modal"
            >
              <span>▶</span> Watch on YouTube
            </a>
          </footer>
        )}
      </div>
    </div>
  );
};
