import React from 'react'
import './style.css'
export default function Footer() {
  return (
    <footer>
      <a
        href='https://www.instagram.com/jasonxgilchrist'
        target='_blank'
        rel='noreferrer'>
        <img
          src={`${process.env.PUBLIC_URL}/instagram.png`}
          alt='instagram-icon'
        />
      </a>
      <a
        href='https://www.facebook.com/jasonxgilchrist'
        target='_blank'
        rel='noreferrer'>
        <img
          src={`${process.env.PUBLIC_URL}/facebook.png`}
          alt='facebook-icon'
        />
      </a>
      <a
        href='https://www.linkedin.com/in/jasonxgilchrist'
        target='_blank'
        rel='noreferrer'>
        <img
          src={`${process.env.PUBLIC_URL}/linkedin.png`}
          alt='linkedin-icon'
        />
      </a>
      <a
        href='https://www.twitter.com/jasonxgilchrist'
        target='_blank'
        rel='noreferrer'>
        <img src={`${process.env.PUBLIC_URL}/twitter.png`} alt='twitter-icon' />
      </a>
    </footer>
  )
}
