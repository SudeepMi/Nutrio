import React from 'react'
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';


function About() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-8 m-auto'>
                <div className='text-center'>
                <Link to='/'> <img src={logo} alt='logo' className='img-fluid'/></Link>
                </div>
                <div className=''>
                    <p className='text-bold text-dark font-monospace'>
                    Nutrio is an online food application. Nutrio is a web application that provides users with nutrition-related information, such as nutrition information, nutrition-related articles, diet recipes, and all types of fruits, including name, family, order, nutrition, carbohydrates, protein, fat, calories, and sugar. It also tells us whether a given dish is beneficial or bad for us if we eat it.
                    </p>
                    <h4 className='mt-5'>Future Scope</h4>
                    <ol>
                        <li>
                            <p>
                                <strong>Nutrio</strong> will be a web application that provides user customized dashboard with the following features:
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        <strong>
                                            Diet planning and alerts (e.g. daily, weekly, monthly, and yearly)
                                        </strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Chatbots to provide nutrition-related information
                                        </strong>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            Paid subscription for users
                                        </strong>
                                    </p>
                                </li>
                                </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About