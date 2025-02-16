import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Import Router here
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Device detection
function detectDevice() {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (/mobile|android|iphone|ipad|tablet/.test(userAgent)) {
    alert('This site is Optimized for Desktop Browsers Only');
    window.location.href = 'https://hardikgarg.me/';
  }
}

detectDevice();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />  {/* Now App manages routes */}
    </Router>
  </React.StrictMode>
);

// Measuring performance
reportWebVitals();
