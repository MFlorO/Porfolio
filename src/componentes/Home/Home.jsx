import React from "react";
import ContactLink from "../ContactLink/ContactLink";

//Translation
// import { useTranslation } from "react-i18next";

//MUI-CSS-ICONS
import {  Stack, Typography } from "@mui/material/";
import styles from "./Home.module.css";
// import {SiGmail, SiGithub} from "react-icons/si"
import fondo from "./fondo.jpg"
import foto from "./fotoPerfil.jpeg"



function Home() {
  // const { t } = useTranslation();

  

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
     
    
    <Stack direction="row" alignItems="center" backgroundColor="background.dark"
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

          <Stack backgroundColor="secondary.dark"
             sx={{
              width: "21%",
              height:{
                lg: "70%"
              }}}
              marginLeft="5rem"
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

          <Stack direction="column" justifyContent="flex-start" alignItems="center"
          color="secondary">
          <Typography variant="h1" fontSize={{ xs: "4rem", xl: "4rem" }} color="text.secondary" >FLORENCIA</Typography>
          <Typography variant="h1"fontSize={{ xs: "4rem", xl: "4rem" }} color="secondary.dark">OLDANI</Typography>
          <Typography variant='h1' component='h3' color='text.primary' 
        sx={{ 
          fontSize:{
           xs:"3rem",
           xl: "3rem"
         },
         lineHeight: "4rem",
        marginTop: "1.5rem",
        marginBotton: "0.5rem"
         }}>Developer Full Stack</Typography>
          </Stack>
          <ContactLink />
          </Stack>
            

          {/* <Stack className={styles.wrapper}> */}
                      {/* <div className={styles.icon}>
             <div className={styles.tooltip}>floroldani@hotmail.com</div>
             <span className={styles.span}><SiGmail className="gmail" size="2rem"/></span>
          </div>

          <div className={styles.icon}>
             <div className={styles.tooltip}>/MFlorO</div>
             <span className={styles.span}><SiGithub className="github" size="2rem"/></span>
          </div> */}
                   
          
      {/* </Stack> */}
      </Stack>

    </Stack>
  );
}

export default Home;
