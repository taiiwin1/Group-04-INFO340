import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Footer } from './Footer';
import '../style.css';

export function LoginPage() {
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();  
    
    const email = event.target.username.value;  
    const password = event.target.password.value;  
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return; 
    }
    navigate('/');
  };

  return (
    <div>
      <main className="login-page">
        <section className="frame">
          <div className="login-container">
            <img src="img/loginbackground.jpg" alt="Login Background" />
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Email</label>
              <input type="text" id="username" name="username" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
              <input type="submit" value="Login" />
            </form>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}