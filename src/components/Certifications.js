import React from "react";
import Certs from "./Certs";
import ProjectsCard from "./ProjectsCard";
import "../styles/Certifications.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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

        <div className="projectDiv col-12 col-md-8">
        <Carousel
            className="projectsCarousel"
            infiniteLoop={true}
            showArrows={true}
            showIndicators={true}
            axis='vertical'
          >
            <div>
              <ProjectsCard>
                <h2>iGem Design Team</h2>
              </ProjectsCard>
            </div>

            <div>
              <ProjectsCard>
                <h2>Fitness Tracker</h2>
              </ProjectsCard>
            </div>


        </Carousel>
        </div>


        <div className="carouselDiv col-12 col-md-4"
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

  );
}

export default Certifications;
