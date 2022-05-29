import './App.css';
import {HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Blog from './Blog';
import Fruits from './Fruits';
import FoodRepo from './FoodRepo';
import PersonalRemedies from './PersonalRemedies';
import Petfood from './Petfood';
import Findfood from './Findfood';

function App() {
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
    </Routes>
  </Router>
  );
}

export default App;
