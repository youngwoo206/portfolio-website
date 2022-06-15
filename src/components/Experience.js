import React from "react";
import "../styles/Experience.css";
import JobCard from "./JobCard";
import nissanPic from "../assets/nissanLogo.jpg";
import uwaterlooPic from "../assets/uwaterlooLogo.jpg";
import rogersPic from "../assets/rogersLogo.png";

function Experience() {
  return (
    <div>
      <div className="headerBar" id='experience'>
        <h1>~my journey so far~</h1>
      </div>
      <div className="expList">
        <JobCard
          pic={nissanPic}
          id="nissan"
          name="Nissan Canada"
          position="Vehicle Planning Intern"
          date="Aug 2021 -> Dec 2021"
          description1="For my most recent co-op term, I got the amazing opportunity to work with the 
          Vehicle Planning team at Nissan. As a long term car enthusiast, this was a dream come true
          for me. As part of the team, I mainly worked to develop VBA macros to automate vehicle allocation
          tasks which would sometimes take up to a couple hours to do manually."
          description2="This experience really helped to challenge me and really broadened my horizons.
          During this work term, I gained a firm mastery of Excel as I dwelved deep into macros, forms, 
          and pivot tables. I also further developed my independent work and communication
          skills as I often independently managed my own projects from conception all the way to delivery."
          description3="In all, I really appreciated my time at Nissan. Beyond developing key skills, I
          cherished the networking opportunities and the small things, like geeking out about cars with 
          my co-workers over Zoom. "
        />

        <JobCard
          pic={uwaterlooPic}
          id='waterloo'
          name="University of Waterloo"
          position="Undergraduate Researcher"
          date="Jan 2021 -> Apr 2021"
          description1="My second internship experience was as an undergraduate researcher under Professor 
          Michael Fowler. As part of his team, we did a lot of very interesting research on upcoming lithium-ion and hydrogen 
          fuel cell technology."
          description2="I was tasked with helping out with various research papers
          the team were working on at the time. By doing this, I picked up a wide range of new skills. From
          electric and thermal modeling of a battery pack in CAD software to data analysis using Python and Excel, this
          co-op experience truly was one where I did a little bit of everything."
          description3="Additionally, my research of upcoming clean energy tech really hammered home the fact that
          climate change is THE unifying challenge of my generation. As someone who is passionate about environmental 
          issues, it was truly inspirational seeing some of the new innovations being developed in this field, all in 
          an effort to reach a carbon neutral future."
        />

        <JobCard
          pic={rogersPic}
          id='rogers'
          name="Rogers Communications"
          position="Network Technologist"
          date="Jun 2020 -> Aug 2020"
          description1="Although I worked as a lifeguard throughout high school, my co-op term at Rogers was my first
          'real job'... and I'm so glad it was. Despite the chaos of work going online due to COVID, my time at Rogers
          is one I'll never forget."
          description2="When the work term went online, it turned out the work my manager had planned for me could only be
          done in person. This initial problem lead to me proposing my own project where I would help develop a database in
          Access to house network tower data. "
          description3="Throughout this process, I developed a firm understanding of important skills 
          like MS Access, querying using SQL, and working with relational databases. However, the most important skill I gained
          was the ability to effectively conceptualize and execute a project idea by quantifying progress, scheduling deadlines, 
          and setting and then exceeding expectations."
          description4="In all, I have nothing but good things to say about my time at Rogers. My manager Roy took me under his wing
          and mentored me throughout the entire term, and the team was super kind as well. But above all, the thing
          I will remember the most is how as first year with nothing under my belt, they took a chance on me and allowed me to grow
          into the person I am today."
        />
      </div>
    </div>
  );
}

export default Experience;
