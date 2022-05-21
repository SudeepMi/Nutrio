import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png';

function Home() {
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-md-12'>
        <div className='jumbotron text-center'>
          <img src={logo} className='app-logo img-responsive py-5' alt='logo' />
          <h3>A Food nutrition app</h3>
          <div className='apps d-flex justify-content-center'>
          <Link className='btn btn-outline-dark btn-outline btn-lg px-5 m-5' to="/blogs" >
          <i className="fab fa-blogger mx-2"></i>
          Blogs</Link>

          <Link className='btn btn-outline-dark btn-outline btn-lg px-5 m-5' to='/fruits' >
          <i className="fas fa-carrot mx-2"></i>
          Fruity Fruits </Link>

          <Link className='btn btn-outline-dark btn-outline btn-lg px-5 m-5' to='/food-repo' >
          <i className="fas fa-utensils mx-2"></i>
          Food Repository </Link>

          <Link className='btn btn-outline-dark btn-outline btn-lg px-5 m-5' to='/personal-remedies' >
          <i className="fas fa-seedling mx-2"></i>
          Search Recipes</Link>
          </div>
      </div></div></div>
  </div>
  )
}

export default Home