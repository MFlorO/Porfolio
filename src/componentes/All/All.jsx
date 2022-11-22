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
import { stylesOne, stylesTwo, stylesThree } from "./All.styles.js";




function All() {

  return (

    <Stack  display="flex" direction="column" backgroundColor="background.dark" sx={stylesOne} >

      <Stack direction="row" alignItems="center" zIndex={400} width="5rem" height="4.5rem" sx={stylesTwo}>
      <Language />

      <Theme />
      </Stack>
     
      <NavBar />

      <Stack id="home"><Home /></Stack>
      <Stack id="about"><AboutMe /></Stack>
      <Stack id="skills"><Skills /></Stack>
      <Stack id="proyects"><Proyects /></Stack>
      <Stack id="contact"><Contact /></Stack>

      <Stack position="fixed" sx={stylesThree}>
        <ButtonNavigateTop />
      </Stack>
      
    </Stack>

  );
}

export default All;