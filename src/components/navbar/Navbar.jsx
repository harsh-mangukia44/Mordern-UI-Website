import React from 'react'
import { RiMenu3Line,RiCloseLine } from 'react-icons/ri'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='gpt3Navbar'>
      <div className='gpt3NavbarLinks'>
        <div className='gpt3NavbarLinksLogo'>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar