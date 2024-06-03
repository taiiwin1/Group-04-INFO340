import React, { useState, useEffect } from 'react';
import { ref, push, onValue, off } from 'firebase/database';
import { db } from '../firebaseConfig';
import { Button, ListGroup, Spinner, Alert } from 'react-bootstrap';

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
  return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>;
 }


 if (error) {
   return <div>Error: {error.message}</div>;
 }


 return (
   <div>
     <h3>User Logins</h3>
     <Button onClick={storeLoginTimestamp} variant="primary">Add Login Timestamp</Button>
     <ul>
      <ListGroup>
        {logins.map((login, index) => (
          <ListGroup.Item key={index}>{login.timestamp}</ListGroup.Item>
        ))}
      </ListGroup>
     </ul>
   </div>
 );
}


export default UserLogins;
