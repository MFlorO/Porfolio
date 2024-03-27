import React from "react";


//MUI-CSS-ICONS
import {  Stack } from "@mui/material/";
import fondo from "./fondo.jpg"
import HomeContent from "./HomeContent/HomeContent.jsx";
import { styleOne, stylesTwo } from "./home.style";



function Home() {
  return (
    <Stack width='100%' direction="column" justifyContent="center" alignItems="center" sx={styleOne} style={{backgroundImage:`url(${fondo})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      <Stack direction="row" alignItems="center" backgroundColor="background.main" justifyContent="center" sx={stylesTwo}>
        <HomeContent/>  
      </Stack>
    </Stack>
  );
}

export default Home;
