import React from 'react';
import {Footer} from './Footer';
import '../style.css';

export function LoginPage() {
  return (
    <div>
      <main className="login-page">
        <section className="frame">
          <div className="login-container">
            <img src="img/loginbackground.jpg" alt="Login Background" />
            <h1>Login</h1>
            <form>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
              <input type="submit" value="Login" />
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}