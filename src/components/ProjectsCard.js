import React from 'react'

function ProjectsCard(props) {
  return (
    <div className='projectCard'>
      <div class="row justify-content-center">
        <div className="col-12 col-md-4 leftProjectCard">
          <div className='imgContainer'>
            <img src={props.projectImg} className="projectPic" alt="project thumbnail" />
          </div>

          <p>{props.projectDate}</p>

          <h5>Project Status:</h5>

          <h6>{props.projectStatus}</h6>

        </div>

        <div className="col-12 col-md-8 rightProjectCard">

          <h2>{props.projectName}</h2>
          {props.children}
          

        </div>
      </div>
    </div>
  )
}

export default ProjectsCard