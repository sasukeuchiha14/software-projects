import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';  // UseNavigate to control navigation
import { counterContext } from './context/context';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/about_us';
import Contact from './pages/Contact';
import './App.css';
import AdminLogin from './pages/admin/login';
import Dashboard from './pages/admin/dashboard';
import EditMenu from './pages/admin/edit_menu';
import Responses from './pages/admin/responses';
// import logo from './assets/logo.png';
// import ace from './assets/ace.png';

function App() {
  const navigate = useNavigate();  // Hook to handle navigation
  const [isLoggedIn, setIsLoggedIn] = useState(0);

  return (
    <counterContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <header>
        <nav>
          {/* <img src={logo} alt="Ace Canteen" onClick={() => navigate('/home')} /> */}
          <button onClick={() => navigate('/home')}>Home</button>
          <button onClick={() => navigate('/menu')}>Menu</button>
          <button onClick={() => navigate('/about')}>About Us</button>
          <button onClick={() => navigate('/contact')}>Contact Us</button>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/edit-menu" element={<EditMenu />} />
          <Route path="/admin/responses" element={<Responses />} />
        </Routes>
      </main>
      
      <footer>
        <p>&copy; 2024 Ace Canteen</p>
        {isLoggedIn === 1 ? (
          <span>
            <button onClick={ () => {
              setIsLoggedIn(0)
              if (['/admin/dashboard', '/admin/edit-menu', '/admin/responses'].includes(window.location.pathname)) {
                navigate('/admin/login')
              }
            }}>LogOut Admin</button>
            <button onClick={() => navigate('/admin/dashboard')}>Admin Panel</button>
          </span>
        ) : (
          <button onClick={() => navigate('/admin/login')}>Admin Login</button>
        )}
      </footer>
    </counterContext.Provider>
  );
}

export default App;
