// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function WorkCard({
  // eslint-disable-next-line react/prop-types
  workUrl,
  // eslint-disable-next-line react/prop-types
  workImage,
  // eslint-disable-next-line react/prop-types
  workTitle,
  // eslint-disable-next-line react/prop-types
  githubUrl,
  // eslint-disable-next-line react/prop-types
  workDescription,
  // eslint-disable-next-line react/prop-types
  workSkills
}) {
  return (
    <>
      <div className="work-card-container">
        <a href={workUrl} target="_blank">
          <img src={workImage} className="work-image" />
        </a>
        <div className="work-title-wrapper">
          <a href={workUrl} className="work-link" target="_blank">
            <h2 className="work-title">{workTitle}</h2>           
          </a>
          <a
                className="work-link-github"
                href={githubUrl}
                target="_blank"
              >
              <FontAwesomeIcon icon={faGithub} alt="github logo" className="github-logo-work" />
              </a>
        </div>
          <p className="work-description">{workDescription}</p>
        <div className="work-skills">
          {workSkills.map((skill, index) => (
            <p className="work-skill" key={index}>{skill}</p>
          ))}
        </div>       
        </div>
    </>
  );
}

export default WorkCard;