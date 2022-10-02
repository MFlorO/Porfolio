import React from 'react'
import ContactLink from "../ContactLink/ContactLink";


import Zoom from 'react-reveal/Zoom';
import {  Stack, Typography } from "@mui/material/";
import styles from "./HomeContent.module.css";


function HomeContent({foto}) {
  return (
    <>
        <Stack backgroundColor="secondary.dark"
             sx={{
              width: "21%",
              height:{
                lg: "70%"
              }}}
              marginLeft="4rem"
          >
            <img  src={foto} alt="" className={styles.foto}/>
          </Stack>

          <Stack direction="column" justifyContent="space-around" alignItems="center"
              sx={{
                width: "55%",
                height:{
                  lg: "40%"
                }}}
            // backgroundColor="red"
              >

          <Zoom>
          <Stack direction="column" justifyContent="flex-start" alignItems="center"
          color="secondary">
          <Typography variant="h1" fontSize={{ xs: "4rem", xl: "5rem" }} color="text.secondary" >FLORENCIA</Typography>
          <Typography variant="h1"fontSize={{ xs: "4rem", xl: "5rem" }} color="secondary.dark">OLDANI</Typography>
          <Typography variant='h1' component='h3' color='text.primary' 
        sx={{ 
          fontSize:{
           xs:"3rem",
           xl: "3rem"
         },
         color:"text.primary",
         lineHeight: "4rem",
         marginTop: "3rem",
         marginBotton: "1rem"
         }}>Developer Full Stack</Typography>
          </Stack>
          
          <ContactLink />

          </Zoom> 

          </Stack>
    </>
  )
}

export default HomeContent