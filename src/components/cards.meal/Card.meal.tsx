import './Card.meal.css';
import type { MealAPI } from '../../types/meal'; 

interface MealCardProps {
  meal: MealAPI;
  onClick?: () => void;
}

export const MealCard = ({ meal, onClick }: MealCardProps) => {
  return (
    <div className="meal-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="card-image-container">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="card-image" />
        <button className="favorite-btn" onClick={(e) => e.stopPropagation()}>❤️</button>
      </div>
      
      <div className="card-content">
        <h3>{meal.strMeal}</h3>
        <div className="card-info">
          <span>Category: {meal.strCategory}</span>
        </div>
      </div>
    </div>
  );
};