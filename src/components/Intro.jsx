// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import 'animate.css';
import Daniel from "..//images/daniel.jpeg";

function Intro() {
  return (
    <>
      <section className="intro">
          <div className="intro-image-wrapper">
            <img
              className="intro-image"
              src={Daniel}
              alt="Headshot of Daniel smiling"
            />
          </div>
          <div className="intro-text-wrapper">
            <h1 className="intro-headline animate__animated animate__slideInDown">Hi! I&apos;m Daniel</h1>
            <p className="intro-text animate__animated animate__slideInDown">
              I am a software engineer specialising in JavaScript, React and Node.
            </p>
            <p className="intro-text animate__animated animate__slideInDown">
            With over a decade at the forefront of BBC's digital transformation, I excel in collaboration and increasing platform reach.
            </p>
          </div>
          <div className="intro-links-wrapper">
            <a
                className="intro-link-github"
                href="https://github.com/southyd12"
              >
              <FontAwesomeIcon icon={faGithub} alt="github logo" className="github-logo-intro" />GitHub
              </a>
              <a className="intro-link-linkedin" href="https://www.linkedin.com/in/daniel-south-6508a518/">
              <FontAwesomeIcon icon={faLinkedin} alt="linkedin logo" className="linkedin-logo-intro" />LinkedIn
              </a>
            </div>
      </section>
    </>
  );
}

export default Intro;