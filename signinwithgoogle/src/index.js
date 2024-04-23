import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

const AppLayout = () => {
  return (
    <React.StrictMode>
      <GoogleOAuthProvider clientId="1008163326688-i86sgsa1f9h2oudo7e9mf59aj4ufco2s.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
