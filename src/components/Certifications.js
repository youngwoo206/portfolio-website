import React from "react";
import Certs from "./Certs";
import ProjectsCard from "./ProjectsCard";
import "../styles/Certifications.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import discord from "../assets/discord.png"
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
                    
                    projectDate="Jun 2022 - Present"
                    projectName="iGem Design Team"
                  
                  
                  
                  />
              </div> 
            </div>

            <div>
              <div className='projectBorder'>   
                  <ProjectsCard   
                      projectImg={discord}
                      projectDate="Jun 2022 - Present"
                      projectName="Valorant Discord Bot"
                  >

                    <p>First conceived by my friend Alex, the DasamRankBot is a discord bot worked on by Alex, Thomas and I. the purpose of the bot
                      is to track the valorant ranks of the various accounts in our friendgroup.
                    </p>

                  </ProjectsCard>
              </div> 
            </div>
              
            <div>
              <div className='projectBorder'>   
                  <ProjectsCard
                    
                      projectDate="May 2022 - Present"
                      projectName="Fitness Tracker Website"
                  

                  />
              </div> 
            </div>
              
            <div>
              <div className='projectBorder'>   
                  <ProjectsCard
                    
                      projectDate="Sept 2019 - Dec 2019"
                      projectName="Midnight Sun Design Team"
                  

                  />
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
