import './Card.meal.css';
import type { MealAPI } from '../types/meal'; 

export const MealCard = ({ meal }: { meal: MealAPI }) => {
  return (
    <div className="meal-card">
      <div className="card-image-container">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="card-image" />
        <button className="favorite-btn">❤️</button>
      </div>
      
      <div className="card-content">
        <h3>{meal.strMeal}</h3>
        <div className="card-info">
          <span>🏷️ {meal.strCategory}</span>
        </div>
      </div>
    </div>
  );
};