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
              backgroundColor:{
                xs: "background.main",
                sm: "secondary.dark",
                md: "secondary.dark",
                lg: "secondary.dark",
                xl: "secondary.dark",
                xxl: "secondary.dark"
              },
              width:{
                xs: "21%",
                sm: "21%",
                md: "21%",
                lg: "21%",
                xl: "21%",
                xxl: "21%"
              },
              height:{
                xs: "50%",
                sm: "50%",
                md: "50%",
                lg: "60%",
                xl: "70%",
                xxl: "55%"
              },
              marginLeft:{
                xs: "-5rem",
                sm: "1rem",
                md: "2rem",
                lg: "4rem",
                xl: "4rem",
                xxl: "4rem"
              },
            }}
            >
            <img  src={foto} alt="" className={styles.foto}/>
          </Stack>

          <Stack direction="column" justifyContent="space-around" alignItems="center"
              sx={{
                width: "55%",
                height:{
                  xs: "40%",
                  sm: "40%",
                  md: "40%",
                  lg: "40%",
                  xl: "40%",
                  xxl: "50%"
                },
              }}
              >

          <Zoom>
          <Stack direction="column" justifyContent="flex-start" alignItems="center"
          color="secondary">
          <Typography variant="h1" fontSize={{ xs: "3.8rem", xl: "5rem", xxl:"7rem" }} color="text.secondary" >FLORENCIA</Typography>
          <Typography variant="h1"fontSize={{ xs: "3.8rem", xl: "5rem", xxl:"7rem" }} color="secondary.dark">OLDANI</Typography>
          <Typography variant='h1' component='h3' color='text.primary' 
        sx={{ 
          fontSize:{
           xs:"2rem",
           xl: "3rem"
         },
         color:"text.primary",
         lineHeight: "4rem",
         marginTop: "3rem",
         marginBotton: "1rem",
         }}>Developer Full Stack</Typography>
          </Stack>
          
          <ContactLink />

          </Zoom> 

          </Stack>
    </>
  )
}

export default HomeContent