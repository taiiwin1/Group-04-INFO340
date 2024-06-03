import React, { useState, useEffect } from 'react';
import { ref, push, onValue, off } from 'firebase/database';
import { db } from '../firebaseConfig';


function UserLogins({ userId }) {
 const [logins, setLogins] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);


 useEffect(() => {
   const loginsRef = ref(db, 'users/' + userId + '/logins');
   onValue(loginsRef, (snapshot) => {
     const data = snapshot.val();
     const loginList = data ? Object.values(data) : [];
     setLogins(loginList);
     setLoading(false);
   }, (error) => {
     setError(error);
     setLoading(false);
   });


   return () => off(loginsRef);
 }, [userId]);


 const storeLoginTimestamp = () => {
   const timestamp = new Date().toISOString();
   push(ref(db, 'users/' + userId + '/logins'), {
     timestamp: timestamp
   }).catch((error) => {
     console.error("Error storing login timestamp: ", error);
   });
 };


 if (loading) {
   return <div>Loading...</div>;
 }


 if (error) {
   return <div>Error: {error.message}</div>;
 }


 return (
   <div>
     <h3>User Logins</h3>
     <button onClick={storeLoginTimestamp}>Add Login Timestamp</button>
     <ul>
       {logins.map((login, index) => (
         <li key={index}>{login.timestamp}</li>
       ))}
     </ul>
   </div>
 );
}


export default UserLogins;
