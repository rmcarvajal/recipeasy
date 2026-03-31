import { Navbar } from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />

      <main style={{ textAlign: 'center', padding: '50px' }}>
        <h1 style={{ fontSize: '3rem', color: '#333' }}>Recipeasy</h1>
        <p>Próximamente: Buscador y Recetas</p>
      </main>
    </div>
  );
};

export default Home;