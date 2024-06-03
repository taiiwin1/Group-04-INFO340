import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { LoginPage } from './components/LoginPage';
import { Footer } from './components/Footer';
import UserLogins from './components/UserLogins';
import './style.css';


export function App() {
 const [user, setUser] = useState(null);


 return (
   <div>
     <Header />
     <Routes>
       <Route path="/" element={<HomePage user={user} />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/login" element={<LoginPage setUser={setUser} />} />
       <Route path="/logins" element={user ? <UserLogins userId={user.uid} /> : <Navigate to="/login" />} />
     </Routes>
     <Footer />
   </div>
 );
}