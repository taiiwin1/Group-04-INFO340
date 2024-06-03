import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Footer } from './Footer';
import '../style.css';


export function LoginPage({ setUser }) {
 const navigate = useNavigate();
 const [isLogin, setIsLogin] = useState(true); // this is to toggle between login and sign-up
 const [error, setError] = useState(null);


 const handleSubmit = async (event) => {
   event.preventDefault(); 
  
   const email = event.target.username.value; 
   const password = event.target.password.value; 
  
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
     alert("Please enter a valid email address");
     return;
   }


   const auth = getAuth();
   try {
     let userCredential;
     if (isLogin) {
       userCredential = await signInWithEmailAndPassword(auth, email, password);
     } else {
       userCredential = await createUserWithEmailAndPassword(auth, email, password);
     }
     setUser(userCredential.user);
     navigate('/');
   } catch (error) {
     setError(error.message);
   }
 };


 return (
   <div>
     <main className="login-page">
       <section className="frame">
         <div className="login-container">
           <img src="img/loginbackground.jpg" alt="Login Background" />
           <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
           {error && <p>{error}</p>}
           <form onSubmit={handleSubmit}>
             <label htmlFor="username">Email</label>
             <input type="text" id="username" name="username" required />
             <label htmlFor="password">Password</label>
             <input type="password" id="password" name="password" required />
             <input type="submit" value={isLogin ? 'Login' : 'Sign Up'} />
           </form>
           <button onClick={() => setIsLogin(!isLogin)}>
             {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
           </button>
         </div>
       </section>
     </main>
     <Footer />
   </div>
 );
}
