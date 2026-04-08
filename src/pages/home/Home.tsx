import { useState, useEffect } from 'react'; 
import { Navbar } from '../../components/Navbar';
import { MealCard } from '../../components/cards.meal/Card.meal';
import { getMeals } from '../../services/mealService'; 
import type { MealAPI } from '../../types/meal'; 
import './Home.css';
import chefhat from "../../assets/ChefHat.svg"
import { StatisticCard } from '../../components/statistics/Card.statistics';

const Home = () => {
  const [meals, setMeals] = useState<MealAPI[]>([]);

  useEffect(() => {
    getMeals('s').then((data) => {
    setMeals(data.slice(0, 8)); 
  });
  }, []);

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

        <div className="meals-grid">
          {meals.map((item) => (
            <MealCard key={item.idMeal} meal={item} />
          ))}
        </div>
        <div className="statistics-container">
              <StatisticCard icon="🍳" value="25+" label="Delicious Recipes" />
              <StatisticCard icon="📂" value="8+" label="Categories" />
              <StatisticCard icon="🌎" value="12+" label="Global Cuisines" />
        </div>
      </main>
    </div>
  );
};

export default Home;