import React from "react";
import { useNavigate } from "react-router";
import Language from "../Language/Language.jsx";

//Translation
import { useTranslation } from "react-i18next";

//MUI-EFECTS
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import { Stack, Button, Typography } from "@mui/material/";
import Theme from "../Theme/Theme.jsx";




function LandingPage({ColorModeContext}) {

  const navigate = useNavigate();
  const { t } = useTranslation();

  const [text] = useTypewriter({
    words: [`${t('landing.hellow')} Florencia Oldani`, `${t('landing.thanks')}`],
    // loop: {0},
    // onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })



  function login() {
    navigate("/all");
  }


  return (
    <Stack
      direction="row"
      spacing={12}
      width="100%"
      height={"100vh"}
      maxHeight={"100vh"}
      backgroundColor="background.dark"
      justifyContent="flex-start"
      alignItems="center"
      color="primary.dark"
    >
      <Language />
      <Theme ColorModeContext={ColorModeContext}/>
      
      <Stack direction="column">
      <Typography variant='h5' component='h1' color='text.primary'>{t('landing.hellow')}</Typography>
      <Typography variant='h5' component='h1' color='text.secondary'>Florencia Oldani</Typography>
      <Typography variant='h6' component='h2' color='text.seconday'>{t('landing.thanks')}</Typography>
      <Typography variant='h6'style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }} color='text.dark'>
        {/* Life is simple{' '} */}
      <span>{text}</span>
      <Cursor />
      </Typography>
      </Stack>
    
      <Button variant="outlined" onClick={login} size="large">{t("landing.ingresar")}</Button>
    </Stack>
  );
}

export default LandingPage;
