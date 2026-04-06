interface MealProps {
  title: string;
  time: string;
  rating: number;
  image: string;
}

export const MealCard = ({ title, time, rating, image }: MealProps) => {
  return (
    <div className="meal-card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        <button className="favorite-btn">❤️</button>
      </div>
      
      <div className="card-content">
        <h3>{title}</h3>
        <div className="card-info">
          <span>⏱️ {time} min</span>
          <span>⭐ {rating}</span>
        </div>
      </div>
    </div>
  );
};