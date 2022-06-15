import React from "react";
import { Link } from 'react-scroll'
import '../styles/Navbar.css'


function Navbar() {


  return (
    
      <header className='nav'>
      
        <a className='resume' href="/resume/ResumeYoungwooLee.pdf" download>Resume</a>
        
        <nav className="navLinks">
          <Link class='navLink' to="aboutme"  >About Me</Link>
          <Link class='navLink' to="experience"  >Experience</Link>
          <Link class='navLink' to="certs"  >Certifications</Link>
        </nav>


      </header>
    
  );
}

export default Navbar;
