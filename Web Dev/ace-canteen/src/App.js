import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';  // UseNavigate to control navigation
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

function App() {
  const navigate = useNavigate();  // Hook to handle navigation

  return (
    <>
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
        {window.location.pathname === '/admin/dashboard' || window.location.pathname === '/admin/edit_menu' || window.location.pathname === '/admin/responses' ? (
          <button onClick={() => navigate(window.location.pathname)}>Admin Panel</button>
        ) : (
          <button onClick={() => navigate('/admin/login')}>Admin Login</button>
        )}
      </footer>
    </>
  );
}

export default App;
