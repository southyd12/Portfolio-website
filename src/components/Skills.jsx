// eslint-disable-next-line no-unused-vars
import React from 'react'

function Skills({
  // eslint-disable-next-line react/prop-types
  skillsImage,
  // eslint-disable-next-line react/prop-types
  alt,
  // eslint-disable-next-line react/prop-types
  skillsHeading,
  // eslint-disable-next-line react/prop-types
  skillsList
}) {
  return (
    <>
               
          <div className="skills-cards">
            <div className="skills-cards-heading">             
              <h2 className="skills-subheading">{skillsHeading}</h2>
              <img src={skillsImage} alt={alt} className="skills-image" width="80px" height="45px" />
            </div>
            <p className="skills-list">{skillsList}</p>
          </div>
    </>
  )
}

export default Skills