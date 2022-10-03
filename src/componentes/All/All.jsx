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
import ButtonNavigateTop from "./ButtonNavigateTop/ButtonNavigateTop.jsx";




function All({ColorModeContext}) {

  return (

    <Stack  display="flex"
    direction="column"
    sx={{
      width:"100%",
      height: {
        xs: "120vh",
        sm: "100vh",
        md: "100vh",
        lg: "100vh",
        xl: "100vh",
      },
    }}
    backgroundColor="background.dark"
    >

      <Stack direction="row" position="fixed" alignItems="center" zIndex={400} width="5rem" height="4rem" sx={{
        right:{
          xs:"7rem",
          xl: "6rem"
        },
        top:{
            xs:"-0.5rem",
            xl: "0.5rem"
        },
      }}>
      <Language />
      <Theme ColorModeContext={ColorModeContext}/>
      </Stack>

      <Stack position="fixed" 
      sx={{
        bottom:{
          xs:"4rem",
          md: "4rem",
          xl: "4rem",
          xxl: "5.5rem"
        },
        right:{
            xs:"3rem",
            xl: "5rem"
        },
      }}><ButtonNavigateTop />
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