import Lottie from 'lottie-react'
import React from 'react'
import { Link } from 'react-router-dom'
import errorAnimation from '../assets/error.json';
const ErrorPage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-white text-center vh-100'>
        <div >
            <Lottie animationData={errorAnimation} loop={false} style={{maxWidth:'400px'}}/>
        </div>
        <h1>ERROR 404!</h1>
        <p className='mt-4 mb-4'>Hey I think you are on the wrong site, there isnt any page with this name on the server. Move back?</p>
        <Link to='/'>
        <button className='btn btn-primary mt-3 px-4 py-2 rounded-3'>GO BACK</button>
        </Link>
    </div>
  )
}

export default ErrorPage
