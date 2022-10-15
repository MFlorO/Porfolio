import React from "react";



//MUI-CSS-ICONS
import {  Stack } from "@mui/material/";
import fondo from "./fondo.jpg"
import foto from "./fotoPerfil.jpg"
import HomeContent from "./HomeContent/HomeContent.jsx";
import { styleOne, styleTwo } from "./home.style";



function Home() {

  return (
    <Stack direction="column" justifyContent={"center"} alignItems={"center"}  sx={styleOne}
    style={{backgroundImage:`url(${fondo})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
     
      <Stack direction="row" alignItems="center" backgroundColor="background.main" justifyContent="center" sx={styleTwo}>

      {foto && <HomeContent foto={foto}/> } {/*  Solo me cargue la pagina cuando ya este la foto   */}

      </Stack>

    </Stack>
  );
}

export default Home;
