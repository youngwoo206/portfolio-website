import React from "react";
import linkedInPic from "../assets/linkedin.png";
import gmailPic from "../assets/gmail.jpeg";
import githubPic from "../assets/github.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <div
      className="footer"
      id='footer'
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="footerText">
        <h2>~Contact me anytime!~</h2>
      </div>
      <div
        class="row justify-content-between iconDiv"
        style={{ display: "flex", flex: 1 }}
      >
        <div class="col-4 linkContainer  ">
          <a
            href="https://www.linkedin.com/in/youngwoo-lee-123b63198/"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedInPic} className="imgLink" alt='this is a pic'/>
          </a>
        </div>
        <div class="col-4 linkContainer">
          <a
            href="mailto:youngwoo206@gmail.com"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmailPic} className="imgLink" alt='this is a pic'/>
          </a>
        </div>
        <div class="col-4 linkContainer">
          <a
            href="https://github.com/youngwoo206"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubPic} className="imgLink" alt='this is a pic'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
