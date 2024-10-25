import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';  // UseNavigate to control navigation
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const navigate = useNavigate();  // Hook to handle navigation

  return (
    <>
      <header>
        <nav>
          {/* Add onClick handlers to navigate */}
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/menu')}>Menu</button>
          <button onClick={() => navigate('/about')}>About Us</button>
          <button onClick={() => navigate('/contact')}>Contact Us</button>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <footer>
        <p>&copy; 2024 Ace Canteen</p>
      </footer>
    </>
  );
}

export default App;
