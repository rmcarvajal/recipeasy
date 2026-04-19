import './Card.video.css';
import type { MealAPI } from '../../types/meal';

export const VideoCard = ({ meal }: { meal: MealAPI }) => {
  return (
    <a 
      href={meal.strYoutube} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="video-card-link"
    >
      <div className="video-card">
        <div className="video-thumbnail-container">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="video-thumbnail" />
          <div className="play-overlay">
            <span className="play-icon">▶</span>
          </div>
        </div>
        
        <div className="video-content">
          <div className="video-info">
            <span className="video-category">{meal.strCategory}</span>
            <h3 className="video-title">{meal.strMeal}</h3>
          </div>
          <span className="watch-link">
            Watch Tutorial
          </span>
        </div>
      </div>
    </a>
  );
};
