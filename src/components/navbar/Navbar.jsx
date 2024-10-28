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
        <div className='gpt3NavbarLinksContainer'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar