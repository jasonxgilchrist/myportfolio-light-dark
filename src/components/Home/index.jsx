import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Home() {
  return (
    <div className='home'>
      <div className='title'>
        <h1>
          <p>Hi,</p>
          <p>I'm Jason</p>
          <p>Software Developer</p>
        </h1>
        <Link to='/about'>
          <button>More Info</button>
        </Link>
      </div>
      <div className='person'>
        <img
          src={`${process.env.PUBLIC_URL}/jason._flip.jpg`} //to access imag ein public folder
          alt='person pic'
        />
      </div>
    </div>
  )
}
