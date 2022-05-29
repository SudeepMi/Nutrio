import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png';

function Home() {
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-md-12'>
        <div className='jumbotron text-center'>
          <div className='row'>
            <div className='col-lg-5 col-md-8 col-sm-12 m-auto'>
                <img src={logo} className='app-logo img-responsive py-1' alt='logo' width={'100%'} />
              </div>
          </div>
          <div className='apps d-flex justify-content-center flex-wrap'>
          <Link className='btn btn-outline-info btn-outline btn-lg px-5 m-4 w-25' to="/blogs" >
          <i className="fab fa-blogger mx-2"></i>
          Blogs</Link>

          <Link className='btn btn-outline-danger btn-outline btn-lg px-5 m-4 w-25' to='/fruits' >
          <i className="fas fa-carrot mx-2"></i>
          Fruity Fruits </Link>

          <Link className='btn btn-outline-primary btn-outline btn-lg px-5 m-4 w-25' to='/food-repo' >
          <i className="fas fa-utensils mx-2"></i>
          Food Repository </Link>

          <Link className='btn btn-outline-secondary btn-outline btn-lg px-5 m-4 w-25' to='/personal-remedies' >
          <i className="fas fa-seedling mx-2"></i>
          Search Recipes</Link>

          <Link className='btn btn-outline-dark btn-outline btn-lg px-5 m-4 w-25' to='/pet-foods' >
          <i className="fas fa-seedling mx-2"></i>
          Pet Foods</Link>

          <Link className='btn btn-outline-dark btn-outline btn-lg px-5 m-4 w-25' to='/pet-foods' >
          <i className="fas fa-seedling mx-2"></i>
          Pet Foods</Link>

          
          </div>
      </div></div></div>
  </div>
  )
}

export default Home