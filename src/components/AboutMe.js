import React from "react";
import { Link } from 'react-scroll'
import '../styles/AboutMe.css';
import SkillsCard from "./SkillsCard";
import PersonalPic from "../assets/personalPic.jpg"


function AboutMe() {
    
    return (
        
        <div className='aboutMeBody' id='aboutme'>

            <div className='photo'>
                <img src={PersonalPic} className="personalPic" alt="pic of me"/>
            </div>

            <div className='aboutMeSum'>
                <h1>~a little about me~</h1>
                <p className="para">I'm a Korean-Canadian chemical engineering student from the University of Waterloo. I'm a creative thinker who loves to come up with innovative solutions to problems. 
                    I'm a team player who thrives when communicating and working as part of a group, but I also enjoy working my way through challenges independently.
                </p>
                
                <p className="para">As for my interests, I generally find myself drawn to all things engineering. Anything from programming to soldering, planes, cars, robotics and more all catch my
                    attention. Aside from that, I'm super into basketball, used to play hockey, and worked as a lifeguard during high school. I also have 2 pet dogs and can be 
                    bribed to do pretty much anything in exchange for some McDonald's.
                </p>

                <p className="para">Please feel free to contact me anytime! You can find my email, LinkedIn, and Github <Link class='footLink'to='footer'>here</Link>

                </p>
            </div>

            <div className='skillSum'>
                <h1>~summary of skills~</h1>

                <div className='skillGrid'>

                    <div class="row justify-content-center">

                        <div class="col-12 col-md-4">
                            <SkillsCard label='Engineering'> 
                                <ul className='mainList'>
                                    <li>Excel</li>
                                    <ul className="subList">
                                        <li><Link class='skillLink' to="certs"  >MOS Excel 2016 Certified</Link> </li>
                                        <li><Link class='skillLink' to="nissan">Developed VBA macros and advanced pivot tables</Link></li>  
                                    </ul>

                                    <li>Access</li>
                                    <ul className="subList">
                                        <li><Link class='skillLink' to='rogers'>Developed SQL queries, forms, front-end UI</Link></li>
                                        <li>Data validation on large datasets</li>
        
                                    </ul>
                                    
                                    <li>CAD</li>
                                    <ul className="subList">
                                        <li>Experience with SOLIDWORKS, AuotCAD, Plant 3D</li>
                                        <li><Link class='skillLink' to='waterloo'>COMSOL and Simulink for electrical & thermal modelling</Link></li>
                                    </ul>
                                </ul>

                            </SkillsCard>
                        </div>
                        <div class="col-12 col-md-4">
                            <SkillsCard label='Web Development'> 
                                <ul className="mainList">
                                    <li>JavaScript </li>
                                    <ul className="subList">
                                        <li>Proficiency with JavaScript including React and jQuery libraries</li>
                                        
                                        <li>Experience designing responsive web app features using flexbox, grid, and useState hooks</li>
                                        
                                    </ul>

                                    <li>Web Structure</li>
                                    <ul className="subList">
                                        <li>Knowledge of web structure, DOM, react-router-dom</li>
                                    </ul>

                                    <li>Other</li>
                                    <ul className="subList">
                                        <li>SASS, HTML & CSS</li>
                                        <li>Some experience with git, bash, mongoDB</li>
                                    </ul>



                                </ul>
                            </SkillsCard>
                        </div>
                        <div class="col-12 col-md-4">
                            <SkillsCard label='Other Programming'> 
                                <ul className="mainList">

                                    <li>Python</li>
                                    <ul className="subList">
                                        
                                        <li><Link class='skillLink' to='waterloo'>Data analysis and graphing of experimental data using Python</Link></li>
                                        <li>Intermediate knowledge of data structures and algorithms</li>
                                        <li>Experience with Pandas, Numpy, Matplotlib, Tensorflow and other libraries</li>

                                    </ul>

                                    <li>Other</li>
                                    <ul className="subList">
                                        <li><Link class='skillLink' to="nissan">VBA for Excel macros</Link></li>
                                        <li><Link class='skillLink' to='rogers'>SQL for database queries</Link></li>
                                        
                                    </ul>
                                </ul>
                            </SkillsCard>
                        </div>


                        
                    </div>
                    
                </div>


            </div>





        </div>




    );
}

export default AboutMe