import React from "react";
import Certs from "./Certs";
import ProjectsCard from "./ProjectsCard";
import "../styles/Certifications.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import igem from "../assets/igem.png"
import discord from "../assets/discord.png"
import sun from "../assets/sun.jpg"
import mosExcel from "../assets/mosExcel.png";
import certPlaceholder from "../assets/certPlaceholder.png";



function Certifications() {
  return (
    <div className="certBanner">
      <h1>~projects and certifications~</h1>


      <div
        className='certBody'
        style={{ display: "flex", flex: 1, flexDirection: "column" }}
      >
        <div class="row justify-content-center body">


        <div className="projectDiv col-12 col-md-12">
        <Carousel
            className="projectsCarousel"
            infiniteLoop={true}
            showArrows={true}
            showIndicators={true}
            axis='vertical'
              autoPlay={false}
              stopOnHover={true}
              interval="7000"
              dynamicHeight={true}
              partialVisible={false}
              
          >
            <div>
              <div className='projectBorder'>   
                  <ProjectsCard
                    projectImg={igem}
                    projectDate="Jun 2022 - Present"
                    projectName="iGem Design Team"
                    projectStatus="in progress"
                  >
                    <h4>Description:</h4>
                    <ul>
                      <li>Recruited as web developer for iGem design team's 2022 wiki webpage for fall competition</li>
                      <li>Closely collaborating with web designer and 2 other developers to develop responsive React-based web application</li>
                      <li>2021 wiki example: <a href="https://2021.igem.org/Team:Waterloo">2021.igem.org/Team:Waterloo</a> </li>
                    </ul>

                    <h4>Skills Developed:</h4>
                    <p>React.js, JavaScript, HTML & SCSS, Web design</p>

                  </ProjectsCard>
              </div> 
            </div>

            <div>
              <div className='projectBorder'>   
                  <ProjectsCard   
                    projectImg={discord}
                    projectDate="Jun 2022 - Present"
                    projectName="Valorant Discord Bot"
                    projectStatus="in progress"
                  >
                    <h4>Description:</h4>

                    <ul>
                      <li>Node.js server application built in collaboration with friends using git best practices</li>
                      <li>Discord bot that pulls Valorant account data from Valorant-API when prompted with right command</li>
                      <li>Deployed on Heroku, data stored using MongoDB Atlas Database</li>
                    </ul>

                    <h4>Skills Developed:</h4>

                    <p>JavaScript, Node.js, REST API, MongoDB Atlas, Heroku, Git</p>

                  </ProjectsCard>
              </div> 
            </div>
              
            <div>
              <div className='projectBorder'>   

                  <ProjectsCard   
                    projectImg={sun}
                    projectDate="Sept 2019 - Dec 2019"
                    projectName="Midnight Sun Design Team"
                    projectStatus="completed"
                  >
                    <h4>Description:</h4>

                    <ul>
                      <li>Joined Midnight Sun as part of electrical subteam</li>
                      <li>Helped design and assemble PCB boards for solar powered car</li>
                      <li>Worked in conjunction with mechanical team to assemble controller parts and route wiring</li>
                    </ul>

                    <h4>Skills Developed:</h4>

                    <p>PCB design, soldering, electrical wiring, SOLIDWORKS</p>

                  </ProjectsCard>
              </div> 
            </div>


        </Carousel>
        </div>


        <div className="carouselDiv col-12 col-md-12"
          id="certs"
        >
            <Carousel
            className="carousel"
            infiniteLoop={true}
            showArrows={true}
            showIndicators={true}
            >
              <div>
                <Certs thumb={mosExcel} name="MOS Excel 2016" date="03/01/2022" />
              </div>
              <div>
                <Certs thumb={certPlaceholder} name="Coming" date="soon" />
              </div>
              <div>
                <Certs thumb={certPlaceholder} name="Coming" date="soon" />
              </div>
            </Carousel>
          </div>

        </div>

        </div>
      </div>

  );
}

export default Certifications;
