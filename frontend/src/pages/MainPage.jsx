// rafc
import React from 'react'
import Lottie from 'lottie-react';
import {Link} from 'react-router-dom';
import animationData from '../assets/animation.json';
const MainPage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light'>
      <div style={{ maxWidth:'400px'}}> <Lottie animationData={animationData} loop={true}/></div>
      <h2 className='mt-4'>It looks like you are not signed in</h2>
      <p>Please log in to the access the hotel management system</p>
      <Link to='/login'><button className='btn btn-primary mt-3 px-4 py-2'> Log In</button></Link>
    </div>
  )
}

export default MainPage
