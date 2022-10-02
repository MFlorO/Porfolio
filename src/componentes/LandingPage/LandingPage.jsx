import React from "react";
import { useNavigate } from "react-router";
import Language from "../Language/Language.jsx";

//Translation
import { useTranslation } from "react-i18next";

//MUI-EFECTS
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import { Stack, Button, Typography } from "@mui/material/";
import Themes from "../Theme/Theme.jsx";
import videoPorfolio from "./videoPorfolio.mp4"
import compuNegra from "./compuNegra.png"
import s from "./LandingPage.module.css"





function LandingPage({ColorModeContext}) {

  const navigate = useNavigate();
  const { t } = useTranslation();

  const [text] = useTypewriter({
    words: [`${t('landing.thanks')}`, `${t('landing.message')}`],
  })



  const login = () => navigate("/all")


  return (
    <Stack
    display="flex"
    direction="column"
    sx={{ 
      width:"100%",
      height:{
        xs:"100vh",
        sm:"110vh",
        md:"100vh",
        lg:"100vh",
        xl:"100vh"
      },
      backgroundColor:"background.dark"
    }}
    

    >
      <Stack direction="row" className={s.extras}>
      <Language />
      <Themes ColorModeContext={ColorModeContext}/>
      </Stack>

      <Stack 
      display="flex"
      direction="column"
          sx={{      
            direction:"column",
            width:{
              xs:"70%",
              sm:"70%",
              md:"70%",
              lg:"70%",
              xl:"70%"
            },
            height:{
              xs:"45rem",
              sm:"30rem",
              md:"24rem",
              lg:"24rem",
              xl:"24rem"
            },
            marginLeft:{
              xs:"5rem",
              sm:"2rem",
              md:"4rem",
              lg: "6rem",
              xl: "6rem"
            },
            marginTop:{
              xs:"6rem",
              sm:"10rem",
              md:"10.rem",
              lg: "10.5rem",
              xl: "10.5rem"
            },
            backgroundColor:"background.dark"
          }} 
           >

        <Typography variant='h6' component='h1' color='text.secondary'
        sx={{ 
         fontSize:{
          xs:"3rem",
          sm:"4rem",
          md:"5rem",
          lg: "5rem",
          xl: "5rem"
        }
        }} >{t('landing.hellow')}</Typography>

        <Typography variant='h1' component='h3' color='text.primary' 
        sx={{ 
          fontSize:{
           xs:"3rem",
           sm:"4rem",
           md:"5rem",
           lg: "5rem",
           xl: "5rem"
         },
         lineHeight: {
          xs:"4rem",
        },
        marginTop: {
         xs: "0.2rem",
         sm:"0.7rem",
         md:"0.6rem",
         lg: "0.5rem",
         xl: "0.1rem"
       },
         }}>Developer Full Stack</Typography>
         
        <Typography variant='h5' color='secondary.dark'sx={{ 
          marginTop:{
           xs:"3rem",
           sm:"3rem",
           md:"3rem",
           lg: "4rem",
           xl: "3rem"
         },
         }}>
        <span>{text}</span>
        <Cursor />
        </Typography>

        
        <Stack className={s.fondoImagen} backgroundColor="background.dark"></Stack>
        <video className={s.video} autoPlay loop muted>
          <source src={videoPorfolio} type="video/mp4"/>
        </video>
        <img src={compuNegra} alt="" className={s.img} />
        

      </Stack>

      <Stack 
      sx={{ 
         marginTop:{
          xs:"-15rem",
          sm:"4rem",
          md:"5rem",
          lg: "6rem",
          xl: "-3.5rem"
        }, 
         marginLeft:{
          xs:"7rem",
          sm:"4rem",
          md:"5rem",
          lg: "6rem",
          xl: "6rem"
        }, 
         width:{
          xs:"45%",
          sm:"14%",
          md:"13%",
          lg: "12%",
          xl: "12%"
        },
        }} >
        <Button variant="outlined" size="large" color="secondary" onClick={login}>{t("landing.ingresar")}</Button></Stack>
      </Stack>
  );
}

export default LandingPage;
