// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Daniel from "..//images/daniel1.webp";

function Intro() {
  return (
    <>
      <section className="intro">
          <div className="intro-image-wrapper">
            <img
              className="intro-image"
              src={Daniel}
              alt="Headshot of Daniel smiling"
              width="350px"
              height="466px"           
            />
          </div>
          <div className="intro-text-wrapper">
            <h1 className="intro-headline">Hi! I&apos;m Daniel</h1>
            <p className="intro-text">
              I am a software engineer specialising in JavaScript, React and Node.
            </p>
            <p className="intro-text">
            With over a decade at the forefront of BBC&apos;s digital transformation, I excel in collaboration and increasing platform reach.
            </p>
          </div>
          <div className="intro-links-wrapper">
            <a
                className="intro-link-github"
                href="https://github.com/southyd12"
                target="_blank"
              >
              <FontAwesomeIcon icon={faGithub} alt="github logo" className="github-logo-intro" width="45px" height="25px" />GitHub
              </a>
              <a className="intro-link-linkedin" href="https://www.linkedin.com/in/daniel-south-6508a518/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} alt="linkedin logo" className="linkedin-logo-intro" width="45px" height="25px" />LinkedIn
              </a>
            </div>
      </section>
    </>
  );
}

export default Intro;