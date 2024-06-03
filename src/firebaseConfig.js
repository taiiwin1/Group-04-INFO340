// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';




// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyAKiY3cklYrmDzkdgL_7y1vCCVb7RxhZBA",
 authDomain: "uw-makers-exchange.firebaseapp.com",
 databaseURL: "https://uw-makers-exchange-default-rtdb.firebaseio.com",
 projectId: "uw-makers-exchange",
 storageBucket: "uw-makers-exchange.appspot.com",
 messagingSenderId: "928182442541",
 appId: "1:928182442541:web:0fc51ebb0c95d06bf976a4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);


export { app, auth, db };