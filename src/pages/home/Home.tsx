import { Navbar } from '../../components/Navbar';
import './Home.css';
import chefhat from "../../assets/ChefHat.svg"
import { StatisticCard } from '../../components/statistics/Card.statistics';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="hero-section">
        <div className='hat-container'>
          <img src={chefhat} className='hat'/>
        </div>
        <h1 className="hero-title">Recipeasy</h1>
        <div className="search-container">
        <input type="text" placeholder="Search for recipes, ingredients, or cuisines..." 
                className="search-input"/>
        <button className="search-button">Search</button>
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