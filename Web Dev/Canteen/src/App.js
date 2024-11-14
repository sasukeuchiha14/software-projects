import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';  // UseNavigate to control navigation
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import './App.css';
import AdminLogin from './pages/admin/login';
import Dashboard from './pages/admin/dashboard';

import Responses from './pages/admin/responses';

function App() {
  const navigate = useNavigate();  // Hook to handle navigation

  return (
    <>
      <header>
        <nav>
          {/* Add onClick handlers to navigate */}
          <button onClick={() => navigate('/home')}>Home</button>
          <button onClick={() => navigate('/menu')}>Menu</button>
          <button onClick={() => navigate('/about')}>About Us</button>
          <button onClick={() => navigate('/contact')}>Contact Us</button>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />

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
