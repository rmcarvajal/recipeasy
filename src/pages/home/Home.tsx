import { useState, useEffect, useRef } from 'react'; 
import { Navbar } from '../../components/Navbar';
import { MealCard } from '../../components/cards.meal/Card.meal';
import { VideoCard } from '../../components/card.video/Card.video';
import { RecipeInfo } from '../../components/recipe.info/RecipeInfo';
import { getMeals } from '../../services/mealService'; 
import type { MealAPI } from '../../types/meal'; 
import './Home.css';
import chefhat from "../../assets/ChefHat.svg"
import { StatisticCard } from '../../components/statistics/Card.statistics';

const Home = () => {
  const [meals, setMeals] = useState<MealAPI[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<MealAPI | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getMeals('s').then((data) => {
      setMeals(data); 
    });
  }, []);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMealClick = (meal: MealAPI) => {
    setSelectedMeal(meal);
  };

  const recipeMeals = meals.slice(0, 10);
  const videoMeals = meals.slice(4, 10); // 6 items

  return (
    <div className="home-container">
      <Navbar />
      <main className="hero-section">
        <div className='hat-container'>
          <img src={chefhat} className='hat'/>
        </div>
        <h1 className="hero-title">Recipeasy</h1>
        
        <div className="search-container">
          <input type="text" placeholder="Search for recipes..." className="search-input"/>
          <button className="search-button">Search</button>
        </div>
        
        <div className="statistics-container">
              <StatisticCard icon="🍳" value="25+" label="Delicious Recipes" />
              <StatisticCard icon="📂" value="8+" label="Categories" />
              <StatisticCard icon="🌎" value="12+" label="Global Cuisines" />
        </div>

        <section className="home-content-section">
          <h2 className="section-subtitle">Recipes</h2>
          <div className="carousel-wrapper">
            <button className="carousel-btn left" onClick={() => scrollCarousel('left')}>
              &#10094;
            </button>
            <div 
              className="meals-carousel"
              ref={carouselRef}
            >
              {recipeMeals.map((item) => (
                <MealCard 
                  key={item.idMeal} 
                  meal={item} 
                  onClick={() => handleMealClick(item)} 
                />
              ))}
            </div>
            <button className="carousel-btn right" onClick={() => scrollCarousel('right')}>
              &#10095;
            </button>
          </div>
        </section>

        <section className="home-content-section">
          <h2 className="section-subtitle">Videos</h2>
          <div className="video-grid">
            {videoMeals.map((item) => (
              <VideoCard key={item.idMeal} meal={item} />
            ))}
          </div>
        </section>
        
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

export default Home;