// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../components/Header';
import Intro from '../components/Intro';
import WorkCard from '../components/WorkCard';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import "../styles/main.css";

import footballShop from "../images/footballShopUpdate.png";
import driverApp from "../images/driverApp.png";
import dashboard from "../images/dashboard.png";
import drinkle from "../images/drinkle.png";
import todoApp from "../images/todoApp.png";
import homage from "../images/homage.png";
import fourCards from "../images/fourCards.png";
import portfolio from "../images/portfolio.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import node from "../images/node.png";
import typescript from "../images/typescript.svg";
import mongodb from "../images/mongodb.svg";
import docker from "../images/docker.svg";
import html from "../images/html.png";
import css from "../images/css.png";

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
        workTitle="Football shop and blog"
        githubUrl="https://github.com/southyd12/Full-Stack-Shop-App"
        workDescription="This full stack app is made using Next.js. There is shopping functionality using Tanstack Query, Dinero and Stripe as well as a blog which has been made using GraphQL and Hygraph. Auth0 has also been implemented for authentication."
        workSkills={["Next.js", "MUI", "GraphQL", "Hygraph", "React Hook Form", "Tanstack Query", "Sendgrid", "Mongodb", "Mongoose", "Auth0", "Dinero", "Stripe"]}
      />
      <WorkCard 
        workUrl="https://second-react-app-three.vercel.app/"
        workImage={driverApp}
        workTitle="Driver app"
        githubUrl="https://github.com/southyd12/React-driver-app"
        workDescription="A responsive React app that gets data from a REST API, and allows the user to perform CRUD methods. A form is created with React Hook Form, validation is performed with Yup and MUI uses theming for styling."
        workSkills={["React", "MUI", "REST API", "React Hook Form", "Yup"]}
      />
       <WorkCard 
        workUrl="https://661e99908ce25d260d561c8a--lovely-chebakia-14cd3d.netlify.app/"
        workImage={dashboard}
        workTitle="News Dashboard"
        githubUrl="https://github.com/southyd12/News-dashboard"
        workDescription="An up-to-date dashboard which uses a REST API to illustrate the current date as well as the latest breaking news stories."
        workSkills={["REST API"]}
      />
      <WorkCard 
        workUrl="https://661e9757fb58592c764249c8--whimsical-dodol-acdd07.netlify.app/"
        workImage={drinkle}
        workTitle="Drinkle game"
        githubUrl="https://github.com/southyd12/Drinkle-game"
        workDescription="A silly tweak on the game Wordle. Drinkle uses Javascript and local storage to allow two users to play against each other guessing randomly generated words. The loser has to drink."
        workSkills={["Local storage"]}
      />
      <WorkCard 
        workUrl="https://661e9304af8e4a1f69581b43--regal-sherbet-2c336b.netlify.app/"
        workImage={todoApp}
        workTitle="Todo app"
        githubUrl="https://github.com/southyd12/Todo-app"
        workDescription="This todo app uses vanilla Javascript and local storage to set up a job and the time it will take to complete. The app is styled with Bootstrap."
        workSkills={["Local storage", "Bootstrap"]}
      />
      <WorkCard 
        workUrl="https://661e8f6484318e2aaa181a5c--elaborate-biscuit-fb9960.netlify.app/"
        workImage={homage}
        workTitle="BBC News homage"
        githubUrl="https://github.com/southyd12/BBC-News-website-"
        workDescription="A recreation of the BBC News website using semantically valid HTML and Flex and Grid for layout."
        workSkills={["Strong HTML", "Flexbox", "Grid"]}
      />
            <WorkCard 
        workUrl="https://661e847eac032818471fb701--wonderful-bombolone-4fe8a1.netlify.app/"
        workImage={fourCards}
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
        skillsHeading="Javascript"
        skillsList="ES6+, AJAX, REST API, Next.js, Auth0, Chart.js, Netlify Functions, Git"
       />
         <Skills
        skillsImage={react}
        skillsHeading="React"
        skillsList="React Router, React Hook Form, Tanstack Query, Redux, Vite"
       />
               <Skills
        skillsImage={node}
        skillsHeading="Node"
        skillsList="Express, NPM"
       />
               <Skills
        skillsImage={typescript}
        skillsHeading="Testing"
        skillsList="Typescript, Vitest, React testing library, Cypress"
       />
                      <Skills
        skillsImage={mongodb}
        skillsHeading="Databases"
        skillsList="MongoDB, Mongoose, GraphQL, Hygraph "
       />
                             <Skills
        skillsImage={docker}
        skillsHeading="DevOps"
        skillsList="Docker "
       />
                                    <Skills
        skillsImage={html}
        skillsHeading="HTML5"
        skillsList="Semantically valid for accessibility and SEO"
       />
                                           <Skills
        skillsImage={css}
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