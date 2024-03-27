import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Home from "../Home/Home.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Skills from "../Skills/Skills.jsx";
import Proyects from "../Proyects/Proyects.jsx";
import Contact from "../Contact/Contact.jsx";

//MUI
import { Stack } from "@mui/material/";
import ButtonNavigateTop from "./ButtonNavigateTop/ButtonNavigateTop.jsx";
import { stylesOne, stylesThree } from "./All.styles.js";



function All() {

  return (
    <Stack  display="flex" direction="column" backgroundColor="background.dark" sx={stylesOne}>

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