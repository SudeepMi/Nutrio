import React from 'react'
import './topbar.css'
import Logo from '../assets/logo-sm.png'
import { Link } from 'react-router-dom'
function TopBar({component}) {
  return (
    <div className='container '>
        <nav className="navbar navbar-light px-2">
    <a className="navbar-brand d-flex align-items-md-center" href="/">
    <img src={Logo} width="100%" height="70" alt="" />
    <h3 className='navbar-brand'>NUTRIO</h3>
  </a>
  <div className="">
    <ul className="nav d-flex ml-auto">
    { component !== 'blogs' &&
      <li className="nav-item">
        <Link className="nav-link" to="/blogs">
            <i className="fab fa-blogger mx-2"></i>
            Blogs
        </Link>
      </li>
    }
    { component !== 'fruits' &&
      <li className="nav-item">
        <Link className="nav-link" to="/fruits">
            <i className="fas fa-carrot mx-2"></i>
            Fruity Fruits
        </Link>
      </li>
    }

    { component !== 'food-repo' &&
        <li className="nav-item">
        <Link className="nav-link" to="/food-repo">
            <i className="fas fa-utensils mx-2"></i>
            Food Repository
        </Link>
        </li> }

    { component !== 'personal-remedies' &&

        <li className="nav-item">
        <Link className="nav-link" to="/personal-remedies">
            <i className="fas fa-seedling mx-2"></i>
            Personal Remedies
        </Link>
        </li> }

      
     
    </ul>
  </div>
</nav>
    </div>
  )
}

export default TopBar