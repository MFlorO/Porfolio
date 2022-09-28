import React from "react";
import ExtraFunctions from "../ExtraFunctions/ExtraFunctions.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Home from "../Home/Home.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Skills from "../Skills/Skills.jsx";
import Proyects from "../Proyects/Proyects.jsx";
import Contact from "../Contact/Contact.jsx";


//MUI
import { Stack } from "@mui/material/";
import "./All.css"

function All() {
  const sections = document.querySelector("section");
  const windowsHeight = window.innerHeight;
  const navigation = document.querySelector(".navigations");
  console.log(windowsHeight);

  const reset = () => {
    for (var i=0; i< navigation.children.length ; i++){
      navigation.children[i].classList.remove("selected")
    }
  };

  window.addEventListener("scroll", function(){

    const scrollTop = window.scrollY;

    sections.forEach( (section, i) => {
      if(section.offsetTop < scrollTop + windowsHeight/2 && scrollTop < section.offsetTop + windowsHeight/2){
        reset()
        navigation.children[i].classList.add("selected")
      }
    })
    }
  )

  


  return (
    <Stack>
      <ExtraFunctions />
      <NavBar />

      <Stack position={"fixed"} top={"50%"} zIndex={"10"}>
        <ul className="navigations">
          <li className="selected"></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Stack>

      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="Skills">
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
