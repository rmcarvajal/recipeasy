import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { Login } from './pages/login-signup/login';
import { Signup } from './pages/login-signup/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />        
      </Routes>
    </Router>
  );
}

export default App;
