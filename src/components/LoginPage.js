import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Footer } from './Footer';
import '../style.css';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export function LoginPage() {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();  

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return; 
    }

    try {
      if (isSignUp) {
        // Sign-up logic
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // Login logic
        await signInWithEmailAndPassword(auth, email, password);
      }
      setError('');
      navigate('/');
    } catch (error) {
      setError(isSignUp ? "Failed to sign up. Please try again." : "Failed to log in. Please check your email and password.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <main className="login-page">
        <section className="frame">
          <div className="login-container">
            <img src="img/loginbackground.jpg" alt="Login Background" />
            <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Email</label>
              <input
                type="text"
                id="username"
                name="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="error-message">{error}</p>}
              <input type="submit" value={isSignUp ? "Sign Up" : "Login"} />
            </form>
            <button onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Already have an account? Log in" : "Don't have an account? Sign up"}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
