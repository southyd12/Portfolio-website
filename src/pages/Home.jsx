// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../components/Header';
import Intro from '../components/Intro';
import WorkCard from '../components/WorkCard';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import "../styles/main.css";

import footballShop from "../images/footballShopUpdate.webp";
import driverApp from "../images/driverApp.webp";
import dashboard from "../images/dashboard.webp";
import drinkle from "../images/drinkle.webp";
import todoApp from "../images/todoApp.webp";
import homage from "../images/homage.webp";
import fourCards from "../images/fourCards.webp";
import javascript from "../images/javascript.png";
import react from "../images/react.webp";
import node from "../images/node.png";
import typescript from "../images/typescript.svg";
import mongodb from "../images/mongodb.svg";
import docker from "../images/docker.svg";
import html from "../images/html.png";
import css from "../images/css.webp";

function Home() {
  return (
    <>
    <Header />
    <section id="about">
      <Intro />
    </section>
    <section id="work">
      <h1 className="homepage-work-title">My Work</h1>
      <WorkCard 
        workUrl="https://full-stack-app-livid.vercel.app/"
        workImage={footballShop}
        alt="Screenshot of football blog page"
        workTitle="Football shop and blog"
        githubUrl="https://github.com/southyd12/Full-Stack-Shop-App"
        workDescription="This full stack app is made using Next.js. There is shopping functionality using Tanstack Query, Dinero and Stripe as well as a blog which has been made using GraphQL and Hygraph. Auth0 has also been implemented for authentication."
        workSkills={["Next.js", "MUI", "GraphQL", "Hygraph", "React Hook Form", "Tanstack Query", "Sendgrid", "Mongodb", "Mongoose", "Auth0", "Dinero", "Stripe"]}
      />
      <WorkCard 
        workUrl="https://second-react-app-three.vercel.app/"
        workImage={driverApp}
        alt="Screenshot of list of driver's details on driver app"
        workTitle="Driver app"
        githubUrl="https://github.com/southyd12/React-driver-app"
        workDescription="A responsive React app that gets data from a REST API, and allows the user to perform CRUD methods. A form is created with React Hook Form, validation is performed with Yup and MUI uses theming for styling."
        workSkills={["React", "MUI", "REST API", "React Hook Form", "Yup"]}
      />
       <WorkCard 
        workUrl="https://66277dffada07f7e8aec27c7--inspiring-douhua-a730b2.netlify.app/"
        workImage={dashboard}
        alt="Screenshot of dashboard showing the latest news which includes an image of people protesting"
        workTitle="News Dashboard"
        githubUrl="https://github.com/southyd12/News-dashboard"
        workDescription="An up-to-date dashboard which uses a REST API to illustrate the current date as well as the latest breaking news stories."
        workSkills={["REST API"]}
      />
      <WorkCard 
        workUrl="https://661e9757fb58592c764249c8--whimsical-dodol-acdd07.netlify.app/"
        workImage={drinkle}
        alt="Screenshot of Drinkle game"
        workTitle="Drinkle game"
        githubUrl="https://github.com/southyd12/Drinkle-game"
        workDescription="A silly tweak on the game Wordle. Drinkle uses Javascript and local storage to allow two users to play against each other guessing randomly generated words. The loser has to drink."
        workSkills={["Local storage"]}
      />
      <WorkCard 
        workUrl="https://661e9304af8e4a1f69581b43--regal-sherbet-2c336b.netlify.app/"
        workImage={todoApp}
        alt="Screenshot of todo app with no todos on it"
        workTitle="Todo app"
        githubUrl="https://github.com/southyd12/Todo-app"
        workDescription="This todo app uses vanilla Javascript and local storage to set up a job and the time it will take to complete. The app is styled with Bootstrap."
        workSkills={["Local storage", "Bootstrap"]}
      />
      <WorkCard 
        workUrl="https://6627d5df68eb3b052e52bc53--hilarious-caramel-407087.netlify.app/"
        workImage={homage}
        alt="Screenshot of homage to the BBC News website"
        workTitle="BBC News homage"
        githubUrl="https://github.com/southyd12/BBC-News-website-"
        workDescription="A re-creation of the BBC News website using semantically valid HTML and Flex and Grid for layout."
        workSkills={["Strong HTML", "Flexbox", "Grid"]}
      />
            <WorkCard 
        workUrl="https://661e847eac032818471fb701--wonderful-bombolone-4fe8a1.netlify.app/"
        workImage={fourCards}
        alt="Screenshot of four cards layout"
        workTitle="Four cards"
        githubUrl="https://github.com/southyd12/four-cards/tree/main"
        workDescription="This four cards layout was created by following Figma design files."
        workSkills={["Strong HTML", "Flexbox", "Figma"]}
      />
    </section>
    <section id="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-wrapper"> 
      <Skills
        skillsImage={javascript}
        alt="Javascript logo"
        skillsHeading="Javascript"
        skillsList="ES6+, AJAX, REST API, Next.js, Auth0, Chart.js, Netlify Functions, Git"
       />
         <Skills
        skillsImage={react}
        alt="React logo"
        skillsHeading="React"
        skillsList="React Router, React Hook Form, Tanstack Query, Redux, Vite"
       />
               <Skills
        skillsImage={node}
        alt="Node logo"
        skillsHeading="Node"
        skillsList="Express, NPM"
       />
               <Skills
        skillsImage={typescript}
        alt="Typescript logo"
        skillsHeading="Testing"
        skillsList="Typescript, Vitest, React testing library, Cypress"
       />
                      <Skills
        skillsImage={mongodb}
        alt="MongoDB logo"
        skillsHeading="Databases"
        skillsList="MongoDB, Mongoose, GraphQL, Hygraph "
       />
                             <Skills
        skillsImage={docker}
        alt="Docker logo"
        skillsHeading="DevOps"
        skillsList="Docker "
       />
                                    <Skills
        skillsImage={html}
        alt="HTML5 logo"
        skillsHeading="HTML5"
        skillsList="Semantically valid for accessibility and SEO"
       />
                                           <Skills
        skillsImage={css}
        alt="CSS3 logo"
        skillsHeading="CSS3"
        skillsList="Flexbox, Grid, MUI, Tailwind, Bootstrap, Animation, Figma"
       />
       </div>
    </section>
    <section id="contact">
      <Contact />
    </section>
    <Footer />
    </>
  )
}

export default Home