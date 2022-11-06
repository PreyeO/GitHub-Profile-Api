import "./NavBar.css"
import { AiOutlineBars, AiOutlineClose} from "react-icons/ai"
import React,{ useRef } from 'react'


const NavBar = () => {

const navRef = useRef()

const showNavBar = () => {
 navRef.current.classList.toggle("responsive-nav") 
 
}
  return (
    <header>
      <div className='logo'>
        <h3><a href="/">PDev<span className='logo-span'>{` />`}</span></a></h3>
      </div>
      <nav ref={navRef}>
      
          <a href="/">Home</a>
          <a href='/repos'>Repos</a>
          <a href='/contact'>Contact</a>
          <a href='*'>Resume</a>
         
      <button onClick={showNavBar} className='nav-btn' id='close-btn'>
          <AiOutlineClose />
        </button>
      </nav>
      <button onClick={showNavBar} className='nav-btn' >
       
        <AiOutlineBars />
      </button>
    </header>
  )
}

export default NavBar
