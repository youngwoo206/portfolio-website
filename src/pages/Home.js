import React from "react";


import Navbar from '../components/Navbar';
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe"
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div className='navbar'>
        <Navbar/>
      </div>

      <div className="Intro">
        <Intro />
      </div>

      <div className='AboutMe'>
        <AboutMe/>
      </div>

      <div className="Experience">
        <Experience />
      </div>

      <div className="Cert">
        <Certifications />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
