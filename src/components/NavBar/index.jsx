import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.css'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [ScreenWidth, setScreenWidth] = useState(0)

  const location = useLocation()

  const trackScreenWidth = () => {
    const width = window.innerWidth
    setScreenWidth(width)
    if (width > 800) {
      setOpen(true)
    }
  }

  const handleClose = () => {
    if (ScreenWidth < 800) {
      setOpen(false)
    }
  }

  useEffect(() => {
    trackScreenWidth()
    window.addEventListener('resize', trackScreenWidth)
    return () => {
      window.removeEventListener('resize', trackScreenWidth)
    }
  }, [])

  // const switchElement = document.querySelector('.switch')

  // switchElement.addEventListener('click', () => {
  //   document.body.classList.toggle('dark')
  // })

  const switchElement = () => {
    document.body.classList.toggle('dark')
  }

  return (
    <nav className='navbar'>
      <div onClick={switchElement} class='switch'>
        <div class='flicker'></div>
        <div class='moon'></div>
      </div>
      <div className='nav-wrapper'>
        <div className='logo'>
          <Link to='/'>
            <img src={`${process.env.PUBLIC_URL}/photologo.png`} alt='logo' />
          </Link>
        </div>
        <div className='list-wrapper'>
          <img
            src='https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true'
            alt='menu bars'
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open)
            }}
          />
          <img
            src='https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true'
            alt='menu cross'
            style={{ opacity: !open ? 0 : 1 }}
            onClick={() => {
              setOpen(!open)
            }}
          />
          <ul style={{ left: open ? '0' : '-100vw' }}>
            <li>
              <Link
                onClick={handleClose}
                style={{ color: location.pathname === '/' && '#4071f4' }}
                to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                style={{ color: location.pathname === '/about' && '#4071f4' }}
                to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                style={{ color: location.pathname === '/skills' && '#4071f4' }}
                to='/skills'>
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                style={{ color: location.pathname === '/works' && '#4071f4' }}
                to='/works'>
                Works
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                style={{ color: location.pathname === '/contact' && '#4071f4' }}
                to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
