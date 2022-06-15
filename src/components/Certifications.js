import React from "react";
import Certs from "./Certs";
import "../styles/Certifications.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import mosExcel from "../assets/mosExcel.png";
import certPlaceholder from "../assets/certPlaceholder.png";


function Certifications() {
  return (
    <div className="certBanner">
      <h1>~my certifications~</h1>


      <div
        className='certBody'
>


          <div className="carouselDiv" id="certs">
            <Carousel
              className="carousel"
              centerMode={true}
              centerSlidePercentage={30}
              infiniteLoop={true}
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
