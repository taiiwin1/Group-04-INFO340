import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import {Header} from './components/Header';
import {HomePage} from './components/HomePage';
import {AboutPage} from './components/AboutPage';
import {LoginPage} from './components/LoginPage';
import {Footer} from './components/Footer';
import './style.css';

export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

// export function App() {
//   return (
//     <div>
//       <Header />
//       <HomePage />
//       <AboutPage /> 
//       <LoginPage />
//     </div>
//   );
// }