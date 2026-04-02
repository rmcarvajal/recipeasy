import { Navbar } from '../components/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="hero-section">
        <h1 className="hero-title">Recipeasy</h1>
        <div className="search-container">
        <input type="text" placeholder="Search for recipes, ingredients, or cuisines..." 
                className="search-input"/>
        <button className="search-button">Search</button>
        </div>
        
      </main>
    </div>
  );
};

export default Home;