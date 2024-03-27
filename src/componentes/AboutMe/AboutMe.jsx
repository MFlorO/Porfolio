import React from "react";

import { Stack, Button, Typography } from "@mui/material/";

//Translation
import { useTranslation } from "react-i18next";

//React Reveal
import Zoom from 'react-reveal/Zoom';

import {styleConteiner, stylesSubConteiner, stylesConteinerItems, stytlesItem } from "./aboutMe.styles"



function AboutMe() {
  const { t } = useTranslation();


  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="background.dark"
      sx={styleConteiner}
    >
      <Stack
        justifyContent="space-around"
        alignItems="center"
        marginRight="5.5rem"
        sx={stylesSubConteiner}
      >


        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          sx={stylesConteinerItems}
        >

          <Stack direction="column" justifyContent="space-around" alignItems="center" color="secondary" >
            <Typography variant="h1" color="text.secondary">{t("AboutMe.titleOne")}</Typography>
            <Typography variant="h1" color="secondary.dark">{t("AboutMe.titletwo")}</Typography>
          </Stack>

          <Zoom>
            <Stack>
            <a style={{textDecoration:"none"}} href="MFlorenciaOldaniDeveloperFullStackCV.pdf" download="MFlorenciaOldaniDeveloperFullStackCV.pdf">
              <Button variant="outlined" color="secondary">{t("AboutMe.download")} CV</Button>
            </a>
            </Stack>
          </Zoom>
            
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          color="info.dark"
          textAlign="justify"
          sx={stytlesItem}>

          <Typography variant="body1" marginBottom="1rem">{t("AboutMe.bodyOne")}</Typography>
          <Typography variant="body1" marginBottom="1rem">{t("AboutMe.bodyTwo")}</Typography>
          <Typography variant="body1" marginBottom="1rem" fontWeight={400}>{t("AboutMe.bodyThree")}</Typography>
          <Typography variant="body1" marginBottom="1rem">{t("AboutMe.bodyFour")}</Typography>
          <Typography variant="body1" marginBottom="1rem">{t("AboutMe.bodyFive")}</Typography>
          <Typography variant="body1" marginBottom="1rem">{t("AboutMe.bodySix")}</Typography>
          <Typography variant="body1" marginBottom="1rem">{t("AboutMe.bodySeven")}</Typography>
        </Stack>
      </Stack>

    </Stack>
  );
}

export default AboutMe;
