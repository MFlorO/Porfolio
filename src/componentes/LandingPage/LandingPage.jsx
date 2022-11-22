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
import { stylesFive, stylesFour, stylesOne, stylesSix, stylesThree, stylesTwo } from "./landingPAge.styles.js";
import { ColorModeContext } from "../../ToggleColorMode/ToggleColorMode.jsx"; //Manejo el modo claro/oscuro




function LandingPage() {

  const navigate = useNavigate();
  const { t } = useTranslation();

  const [text] = useTypewriter({
    words: [`${t('landing.thanks')}`, `${t('landing.message')}`],
  })


  return (
    <Stack display="flex" direction="column" backgroundColor="background.dark" sx={stylesOne}>

      <Stack direction="row" className={s.extras}>
      <Language />
      <Themes ColorModeContext={ColorModeContext}/>
      </Stack>

      <Stack display="flex" direction="column" backgroundColor="background.dark" sx={stylesTwo} >

        <Typography variant='h6' component='h1' color='text.secondary'
        sx={stylesThree} >{t('landing.hellow')} Florencia Oldani</Typography>

        <Typography variant='h1' component='h3' color='text.primary' 
        sx={stylesFour}>Developer Full Stack</Typography>
         
        <Typography variant='h5' color='secondary.dark'sx={stylesFive}>
        <span>{text}</span>
        <Cursor />
        </Typography>

        
        <Stack className={s.fondoImagen} backgroundColor="background.dark"></Stack>
        <video className={s.video} autoPlay loop muted>
          <source src={videoPorfolio} type="video/mp4"/>
        </video>
        <img src={compuNegra} alt="" className={s.img} />

      </Stack>

      <Stack sx={stylesSix} >
        <Button variant="outlined" size="large" color="secondary" onClick={() => navigate("/all")}>{t("landing.ingresar")}</Button></Stack>
      </Stack>
  );
}

export default LandingPage;
