import { Navbar } from '../components/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="hero-section">
        <h1 className="hero-title">Recipeasy</h1>
        <p>Proximamente: Buscador y Recetas</p>
      </main>
    </div>
  );
};

export default Home;