import React from 'react';
import '../style.css';

export function LoginPage() {
  return (
    <div className="login-page">
      <div className="frame">
        <div className="login-container">
          <img src="img/Login-icon.png" alt="makers fair icon" />
          <h1>Login</h1>
          <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
            <input type="submit" value="Log In" />
          </form>
        </div>
      </div>
      <footer>
        © 2024 UW Informatics Students. All rights reserved.
      </footer>
    </div>
  );
}