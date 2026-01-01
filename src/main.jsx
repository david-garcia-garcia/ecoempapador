import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Get base path from environment or use default
// Remove trailing slash for BrowserRouter basename
const basePath = (import.meta.env.VITE_BASE_PATH || '/').replace(/\/$/, '') || '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basePath === '/' ? undefined : basePath}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
