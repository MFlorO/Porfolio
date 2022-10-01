import React from "react";
import Language from "../Language/Language.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Home from "../Home/Home.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Skills from "../Skills/Skills.jsx";
import Proyects from "../Proyects/Proyects.jsx";
import Contact from "../Contact/Contact.jsx";
import Theme from "../Theme/Theme.jsx"

//MUI
import { Stack } from "@mui/material/";
import s from"./All.module.css"




function All({ColorModeContext}) {

  

  return (

    <Stack  display="flex"
    direction="column" 
    width="100%"
    height="auto"
    backgroundColor="background.dark"
    >

      <Stack direction="row" position="fixed" marginTop="0.5rem" className={s.extras}>
      <Language />
      <Theme ColorModeContext={ColorModeContext}/>
      </Stack>


      <NavBar />
      

      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="proyects">
        <Proyects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
    </Stack>


  );
}

export default All;