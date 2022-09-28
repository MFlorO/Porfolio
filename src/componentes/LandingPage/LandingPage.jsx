import React from "react";
import { useNavigate } from "react-router";
import ExtraFunctions from "../ExtraFunctions/ExtraFunctions.jsx";

//Translation
import { useTranslation } from "react-i18next";

//MUI-EFECTS
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import { Stack, Button, Typography } from "@mui/material/";


function LandingPage() {

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
      bgcolor={"#212121"}
      justifyContent="flex-start"
      alignItems="center"
    >
      <ExtraFunctions />
      
      <Stack direction="column">
      <Typography variant='h5' component='h1' color={'white'}>{t('landing.hellow')} Florencia Oldani</Typography>
      <Typography variant='h6' component='h2' color={'white'}>{t('landing.thanks')}</Typography>
      <Typography variant='h6'style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }} color={'white'}>
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
