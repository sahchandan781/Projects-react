import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <h1>Projects</h1>
        <button><Link to={'/otp-validator'}>Otp Validator</Link></button>
        <button><Link to={'/progress-bar'}>Progress Bar</Link></button>
    </div>
  )
}

export default Home