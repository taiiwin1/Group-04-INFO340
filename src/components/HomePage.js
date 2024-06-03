import React, { useState, useEffect } from 'react';
import { ref, onValue, set, off } from 'firebase/database';
import { db } from '../firebaseConfig';
import { Footer } from './Footer';
import items from '../data/items.json';
import '../style.css';


export function HomePage({ user }) {
 const [filter, setFilter] = useState('');
 const [searchQuery, setSearchQuery] = useState('');
 const [userItems, setUserItems] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);


 useEffect(() => {
   if (user) {
     const userItemsRef = ref(db, 'users/' + user.uid + '/items');
     onValue(userItemsRef, (snapshot) => {
       const data = snapshot.val();
       const itemList = data ? Object.values(data) : [];
       setUserItems(itemList);
       setLoading(false);
     }, (error) => {
       setError(error);
       setLoading(false);
     });


     return () => off(userItemsRef);
   } else {
     setLoading(false);
   }
 }, [user]);


 const handleFilterChange = (event) => {
   setFilter(event.target.value);
 };


 const handleSearchChange = (event) => {
   setSearchQuery(event.target.value);
 };


 const handleSaveItem = (item) => {
   if (user) {
     const userItemsRef = ref(db, 'users/' + user.uid + '/items');
     set(userItemsRef, [...userItems, item]).catch((error) => {
       console.error("Error saving item: ", error);
     });
   }
 };


 const filteredItems = items.filter(item =>
   item.category.includes(filter) &&
   item.title.toLowerCase().includes(searchQuery.toLowerCase())
 );


 const filteredItems2 = filteredItems.map(item => (
   <div key={item.id} className="card">
     <img src={item.imgSrc} alt={item.title} />
     <h2>{item.title}</h2>
     <p>{item.description}</p>
     {user && <button onClick={() => handleSaveItem(item)}>Save Item</button>}
   </div>
 ));


 if (loading) {
   return <div>Loading...</div>;
 }


 if (error) {
   return <div>Error: {error.message}</div>;
 }


 return (
   <div>
     <main>
       <section>
         <div className="search-bar">
           <input
             type="text"
             placeholder="Search..."
             value={searchQuery}
             onChange={handleSearchChange}
           />
         </div>
         <div className="category-dropdown">
           <select defaultValue="" onChange={handleFilterChange}>
             <option value="" disabled>Select Type</option>
             <option value="Croches">Crocheting</option>
             <option value="Custom Keycaps">Custom Keycaps</option>
             <option value="Clothing">Clothing</option>
             <option value="Bracelets">Bracelets</option>
           </select>
         </div>
       </section>
       <section className="card-container">
         {filteredItems2}
       </section>
     </main>
     <Footer />
   </div>
 );
}