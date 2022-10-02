import React from "react";



//MUI-CSS-ICONS
import {  Stack } from "@mui/material/";
import fondo from "./fondo.jpg"
import foto from "./fotoPerfil.jpg"
import HomeContent from "./HomeContent";



function Home() {

  return (
    <Stack direction="column" justifyContent={"center"} alignItems={"center"} 
    style={{backgroundImage:`url(${fondo})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}
    sx={{
      width: "100%",
      height: {
        xs: "100vh",
        // sm: "150vh",
        // md: "100vh",
        // lg: "100vh",
        xl: "100vh",
      },
    }}>
     
    
    <Stack direction="row" alignItems="center" 
    backgroundColor="background.main"
    justifyContent="center"
    sx={{
      width: "100%",
      height:{
        lg:"80%"
      },
      marginTop: {
        xl: "5rem",
      },
    }}>

    {foto && <HomeContent foto={foto}/> } {/*  Solo me cargue la pagina cuando ya este la foto   */}


        
      </Stack>

    </Stack>
  );
}

export default Home;
