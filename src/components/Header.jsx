// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons"

import danielLogo from "../images/DS_logo.png";

import "../styles/main.css"

function Header() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="page-header">
          <div className="header-left">
          <a className="header-links" href="">
            <img src={danielLogo} alt="Daniel South Logo" className="personal-logo"/>
          </a>
          <a className="header-links" href="https://github.com/southyd12" target="_blank">
            <FontAwesomeIcon icon={faGithub} alt="github logo" className="github-logo" />
          </a>
          <a className="header-links" href="https://www.linkedin.com/in/daniel-south-6508a518/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} alt="linkedin logo" className="linkedin-logo" />
          </a>
          <a className="header-links" href="mailto:southd12@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} alt="envelope" className="email-envelope" />
          </a>
          </div>
          <div className="header-right">
            <nav>
              <FontAwesomeIcon icon={faBars} alt="scrolldown menu" className="burger" onClick={toggleMenu} />
             
              <ul className={`menu-list ${showMenu ? "show-menu" : "hide-menu"}`}>
                <li><a className="header-links section-links" href="#about">About</a></li>
                <li><a className="header-links section-links" href="#work">Work</a></li>
                <li><a className="header-links section-links" href="#skills">Skills</a></li>
                <li><a className="header-links section-links" href="#contact">Contact</a></li>
                <li><a className="header-links section-links" href="" target="_blank" rel="noopener noreferrer">CV</a></li>
              </ul>
              </nav>      
          </div>
      </header>
    </>
  )
}

export default Header