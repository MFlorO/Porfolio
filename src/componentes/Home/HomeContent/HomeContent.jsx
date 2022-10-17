import React from 'react'
import ContactLink from "../../ContactLink/ContactLink";


import Zoom from 'react-reveal/Zoom';
import {  Stack, Typography } from "@mui/material/";
import styles from "./HomeContent.module.css";
import { styleOne, styleThree, styleTwo } from './homeContent.style';
import foto from "./fotoPerfil.jpg"


function HomeContent() {
  return (
    <>
      <Stack sx={styleOne} ><img  src={foto} alt="" className={styles.foto}/> </Stack>

        <Stack direction="column" justifyContent="space-around" alignItems="center" sx={styleTwo} >

        <Zoom>
          <Stack direction="column" justifyContent="flex-start" alignItems="center" color="secondary">

          <Typography variant="h1" fontSize={styleThree} color="text.secondary" >FLORENCIA</Typography>
          <Typography variant="h1"fontSize={styleThree} color="secondary.dark">OLDANI</Typography>
          <Typography variant='h1' component='h3' color='text.primary' sx={{ fontSize:{ xs:"2rem", xl: "3rem" }, color:"text.primary", lineHeight: "4rem", marginTop: "3rem", marginBotton: "1rem" }}>
              Developer Full Stack
          </Typography>

          </Stack>

          <ContactLink />

        </Zoom> 

      </Stack>
    </>
  )
}

export default HomeContent