import React,{useState} from 'react'
import { RiMenu3Line,RiCloseLine } from 'react-icons/ri'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const[toggleMenu,setToggleMenu] = useState(false); 

  return (
    <div className='gpt3Navbar'>
      <div className='gpt3NavbarLinks'>
        <div className='gpt3NavbarLinksLogo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3NavbarLinksContainer'>
          <Menu />
        </div>
      </div>
      <div className='gpt3NavbarSign'>
        <p>Sign In</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3NavbarMenu'>
        {toggleMenu
        ?<RiCloseLine color='white' size={27} onClick={() => setToggleMenu(false)}></RiCloseLine>
        :<RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true)}></RiMenu3Line>
        }
        {toggleMenu && (
          <div className='gpt3NavbarMenuContainer scaleUpCenter'>
            <div className='gpt3NavbarMenuContainerLinks'>
              <Menu />
              <div className='gpt3NavbarMenuContainerLinksSign'>
                <p>Sign In</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar