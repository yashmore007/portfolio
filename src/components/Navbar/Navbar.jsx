import React from 'react'
import './Navbar.css'
import logo from '/src/assets/logo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Navbar() {
  return (
    
        <div className="navbar">
            <ul>
                <li><AnchorLink href="#projects">Projects</AnchorLink></li>
                <li><AnchorLink href="#contact">Contact Me</AnchorLink></li>
            </ul>

            <a href="https://www.linkedin.com/in/yashmore?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='noopener noreferrer'>
              <img src={logo} alt="linkedin logo" />
            </a>
            
        </div>
    
  )
}

export default Navbar
