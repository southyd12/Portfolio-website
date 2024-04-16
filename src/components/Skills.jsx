// eslint-disable-next-line no-unused-vars
import React from 'react'

function Skills({
  // eslint-disable-next-line react/prop-types
  skillsImage,
  // eslint-disable-next-line react/prop-types
  skillsHeading,
  // eslint-disable-next-line react/prop-types
  skillsList
}) {
  return (
    <>
               
          <div className="skills-cards">
            <div className="skills-cards-heading">
              <img src={skillsImage} className="skills-image" />
              <h2 className="skills-subheading">{skillsHeading}</h2>
            </div>
            <p className="skills-list">{skillsList}</p>
          </div>
    </>
  )
}

export default Skills