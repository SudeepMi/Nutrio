import './App.css';
import {HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Blog from './Blog';
import Fruits from './Fruits';
import FoodRepo from './FoodRepo';
import PersonalRemedies from './PersonalRemedies';
import Petfood from './Petfood';
import Findfood from './Findfood';
import About from './About';
import React from 'react';
import { getUserSubscription, isPushNotificationSupported, registerServiceWorker } from './Pwa';
import Install from './components/Install';

function App() {
  React.useEffect(() => {
    isPushNotificationSupported();
    registerServiceWorker();
    getUserSubscription();
  }, [])
  
  return (
    
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/food-repo" element={<FoodRepo />} />
      <Route path="/personal-remedies" element={<PersonalRemedies />} />
      <Route path='/pet-foods' element={<Petfood />} />
      <Route path='/find-foods' element={<Findfood />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;
