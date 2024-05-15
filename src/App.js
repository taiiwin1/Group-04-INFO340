import React from 'react';
import {Header} from './components/Header';
import {HomePage} from './components/HomePage';
import {AboutPage} from './components/AboutPage';
import {LoginPage} from './components/LoginPage';
import './style.css';

export function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutPage /> 
      <LoginPage />
    </div>
  );
}