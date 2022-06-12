import React from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png';
import Install from './components/Install';

function Home() {
  return (
    <div className='container'>
      <Install />
    <div className='row'>
      <div className='col-md-12'>
        <div className='jumbotron text-center'>
          <div className='row'>
            <div className='col-lg-5 col-md-8 col-sm-12 m-auto'>
                <img src={logo} className='app-logo img-responsive py-1' alt='logo' width={'100%'} />
              </div>
          </div>
          <div className='apps d-flex justify-content-center flex-wrap'>
          <Link className='btn btn-light btn-outline btn-block link_btn px-5 m-4' to="/blogs" >
          <i className="fab fa-blogger mx-2"></i>
          Blogs</Link>

          <Link className='btn btn-light btn-outline btn-block link_btn px-5 m-4' to='/fruits' >
          <i className="fas fa-carrot mx-2"></i>
          Fruity Fruits </Link>

          <Link className='btn btn-light btn-outline btn-block link_btn px-5 m-4' to='/food-repo' >
          <i className="fas fa-utensils mx-2"></i>
          Food Repository </Link>

          <Link className='btn btn-light btn-outline btn-block link_btn px-5 m-4' to='/personal-remedies' >
          <i className="fas fa-seedling mx-2"></i>
          Search Recipes</Link>

          <Link className='btn btn-light btn-outline btn-block link_btn px-5 m-4' to='/find-foods' >
          <i className="fas fa-search mx-2"></i>
          Find Foods</Link>

          <Link className='btn btn-light btn-outline btn-block link_btn px-5 m-4' to='/pet-foods' >
          <i className="fas fa-cat mx-2"></i>
          Pet Foods</Link>
          </div>
      <Link className='text-dark text-bold link_btn px-5 m-4' to='/about' >About Nutrio</Link>
      </div>
      </div>
      </div>
  </div>
  )}

export default Home