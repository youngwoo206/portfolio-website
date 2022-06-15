import React, { useState, useRef } from 'react';
import "../styles/SkillsCard.css"


function SkillsCard(props) {
    const [isOpen, setIsOpen] = useState(false);

    const parentRef = useRef();
 

    return (
        <div className="skillsCard">
            <button className='toggle' onClick={() => setIsOpen(!isOpen)}><h3>{props.label}</h3></button>

            <div className='contentParent'
                ref={parentRef}
                style={isOpen ? {
                    height: parentRef.current.scrollHeight + 'px'
                }
                : {
                    height: "0px",
                }
            } 
            >
                <div className='content'>{props.children}</div>
            </div>
      </div>
    );
  };
  
  export default SkillsCard;