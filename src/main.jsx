import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Detect base path from current location
// If we're in a subdirectory (like /ecoempapador), use it as basename
const getBasePath = () => {
  // In development, check if we're in a subpath
  if (import.meta.env.DEV) {
    const path = window.location.pathname;
    // If path starts with /ecoempapador, use it as basename
    if (path.startsWith('/ecoempapador')) {
      return '/ecoempapador';
    }
  }
  // Otherwise, use the base from vite config or default to '/'
  const base = import.meta.env.BASE_URL || '/';
  return base === '/' ? undefined : base.replace(/\/$/, '');
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasePath()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
