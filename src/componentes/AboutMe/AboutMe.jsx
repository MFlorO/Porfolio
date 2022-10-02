import React from "react";

import { Stack, Button, Typography } from "@mui/material/";

//Translation
import { useTranslation } from "react-i18next";

//React Reveal
import Zoom from 'react-reveal/Zoom';




function AboutMe() {
  const { t } = useTranslation();


  return (
    <Stack
      direction="column"
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor="background.dark"
      sx={{
        width: "100%",
        height: {
          xs: "110vh",
          // sm: "100vh",
          // md: "100vh",
          // lg: "100vh",
          xl: "100vh",
        },
      }}
      // backgroundColor="red"
    >
      <Stack
        // direction="row"
        justifyContent="space-around"
        alignItems="center"
        marginRight="5.5rem"
        sx={{
          width: "90%",
          flexDirection:{
            xs:"column",
            // lg:"row",
            xl:"row"
          },
          height: {
            xs: "45rem",
            // sm: "100vh",
            // md: "100vh",
            // lg: "100vh",
            xl: "35rem",
          },
          marginTop: {
            xs: "2rem",
            xl: "1rem",
          },
        }}
        // backgroundColor="blue"
      >


        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            width: {
              xs: "30%",
              sm: "150vh",
              md: "100vh",
              lg: "100vh",
              xl: "30%",
            },
            height:{
              xs:"5rem",
              xl:"10rem",
            },
            marginTop: {
              xs: "0rem",
              xl: "6rem",
            },
            marginLeft: {
              xs: "6rem",
            },
            fontSize:"5rem" 
          }}
          // backgroundColor="green"
        >

          <Stack direction="column" justifyContent="space-around" alignItems="center"
          color="secondary" >
          <Typography variant="h1" color="text.secondary">{t("AboutMe.titleOne")}</Typography>
          <Typography variant="h1" color="secondary.dark">{t("AboutMe.titletwo")}</Typography>
          </Stack>

          <Zoom><Stack marginTop="2rem">
            <a style={{textDecoration:"none"}} href="MFlorenciaOldaniDeveloperFullStackCV.pdf" download="MFlorenciaOldaniDeveloperFullStackCV.pdf">
              <Button variant="outlined" color="secondary">Descargar CV</Button>
            </a>
          </Stack></Zoom>
            
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          color="info.dark"
          textAlign="justify"
          // backgroundColor="red"
          sx={{
            width: {
              xs: "96%",
              sm: "150vh",
              md: "100vh",
              lg: "100vh",
              xl: "65%",
            },
            marginTop: {
              xs:"5rem",
              xl: "4rem",
            },
            marginLeft: {
              xs:"5rem",
              // xl: "4rem",
            },
          }}
        >
          <Typography variant="body1" marginBottom="1rem">
          {t("AboutMe.bodyOne")}
          </Typography>
          <Typography variant="body1" marginBottom="1rem">
          {t("AboutMe.bodyTwo")}
          </Typography>
          <Typography variant="body1" marginBottom="1rem" fontWeight={400}>
          {t("AboutMe.bodyThree")}
          </Typography>
          <Typography variant="body1" marginBottom="1rem">
          {t("AboutMe.bodyFour")}
          </Typography>
          <Typography variant="body1" marginBottom="1rem">
          {t("AboutMe.bodyFive")}
          </Typography>
          <Typography variant="body1" marginBottom="1rem">
          {t("AboutMe.bodySix")}
          </Typography>
          <Typography variant="body1" marginBottom="1rem">
          {t("AboutMe.bodySeven")}
          </Typography>
        </Stack>
      </Stack>

    </Stack>
  );
}

export default AboutMe;
