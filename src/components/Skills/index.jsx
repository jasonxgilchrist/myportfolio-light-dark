import React from 'react'
import './style.css'

export default function Skills() {
  return (
    <div className='skills'>
      <h1>SKills</h1>
      <br />
      <div className='content'>
        <div>
          <strong>Languages</strong>
          <li>C</li>
          <li>JavaScript</li>
          <li>Python</li>
        </div>
        <div>
          <strong>Front End</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>React.js</li>
        </div>
        <div>
          <strong>Back End</strong>
          <li>Node.js</li>
          <li>MongoDb</li>
          <li>MySQL</li>
        </div>
      </div>
    </div>
  )
}
