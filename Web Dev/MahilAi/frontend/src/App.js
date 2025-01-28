import React, { useEffect, useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Admin from './pages/Admin.js';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  useEffect(() => {

    const canvas = document.getElementById('backgroundCanvas');
    const context = canvas.getContext('2d');
    const lines = [];
    const numLines = 100;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // Initialize the canvas size
    resizeCanvas();

    for (let i = 0; i < numLines; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5),
        dy: (Math.random() - 0.5)
      });
    }

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      for (let i = 0; i < numLines; i++) {
        const line = lines[i];
        context.moveTo(line.x, line.y);
        context.lineTo(line.x + line.dx * 10, line.y + line.dy * 10);
        line.x += line.dx;
        line.y += line.dy;

        if (line.x < 0 || line.x > canvas.width) line.dx *= -1;
        if (line.y < 0 || line.y > canvas.height) line.dy *= -1;
      }
      context.strokeStyle = '#ffffff';
      context.stroke();
      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas id="backgroundCanvas" className="backgroundCanvas fixed top-0 left-0 w-full h-full -z-10"></canvas>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <nav className="bg-black p-4 relative z-20">
          <div className="container mx-auto flex justify-between items-center">
              <div className="text-white text-xl font-bold">MahilAi</div>
              <div className="block sm:hidden">
                  <button onClick={toggleMenu} className="text-white focus:outline-none">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                      </svg>
                  </button>
              </div>
              <div className="hidden sm:flex space-x-4">
                  <button 
                    onClick={() => navigate("/home")} 
                    className={`text-white text-lg relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 
                    ${window.location.pathname === '/home' || window.location.pathname === '/' ? 'after:scale-x-100' : 'after:scale-x-0'} 
                    after:transition-transform after:duration-300 hover:after:scale-x-100`}
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => navigate("/about")} 
                    className={`text-white text-lg relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 
                    ${window.location.pathname === '/about' ? 'after:scale-x-100' : 'after:scale-x-0'} 
                    after:transition-transform after:duration-300 hover:after:scale-x-100`}
                  >
                    About
                  </button>
                  <button 
                    onClick={() => navigate("/contact")} 
                    className={`text-white text-lg relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 
                    ${window.location.pathname === '/contact' ? 'after:scale-x-100' : 'after:scale-x-0'} 
                    after:transition-transform after:duration-300 hover:after:scale-x-100`}
                  >
                    Contact Us
                  </button>
              </div>
          </div>
          <div className={`absolute top-full left-0 w-full bg-black sm:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'scale-y-100' : 'scale-y-0'} origin-top`}>
              <button 
                onClick={() => navigate("/home")} 
                className={`block text-white text-lg p-4 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 
                ${window.location.pathname === '/home' || window.location.pathname === '/' ? 'after:scale-x-100' : 'after:scale-x-0'} 
                after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                Home
              </button>
              <button 
                onClick={() => navigate("/about")} 
                className={`block text-white text-lg p-4 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 
                ${window.location.pathname === '/about' ? 'after:scale-x-100' : 'after:scale-x-0'} 
                after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                About
              </button>
              <button 
                onClick={() => navigate("/contact")} 
                className={`block text-white text-lg p-4 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 
                ${window.location.pathname === '/contact' ? 'after:scale-x-100' : 'after:scale-x-0'} 
                after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                Contact Us
              </button>
          </div>
        </nav>

        <div className="container mx-auto flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>

        <footer className="footer">
            <div className="text-center text-sm text-gray-400 p-4">
                &copy; {new Date().getFullYear()} MahulAi. All rights reserved.
            </div>
        </footer>
      </div>
    </>
  );
}

export default App;