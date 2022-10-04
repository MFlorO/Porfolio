import React from 'react'
import skillsAll from "./skills.js"

//Translation
import { useTranslation } from "react-i18next";

//MUI
import { IconButton, Stack, Typography } from "@mui/material/";
import { styled } from '@mui/material/styles';

//React Reveal
import Zoom from 'react-reveal/Zoom';




const ButtonStyles = styled(IconButton)(({ theme }) => ({
  color:'secondary',
  size: "6rem"
}));

const TypographyStyles = styled(Typography)(({ theme }) => ({
  color:'text.secondary',
  fontFamily: "Raleway",
  fontWeight: 600,
}));




function Skills() {

    const { t } = useTranslation();

  return (
    <Stack
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      backgroundColor="background.dark"
      sx={{
        width: "100%",
        height: { xs: "80vh", sm: "100vh", md: "100vh", lg: "100vh", xl: "100vh" },
        paddingTop: { xs: "2rem", xl: "0rem" }
      }}>

      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        marginRight="5.5rem"
        sx={{
          width: "90%",
          height: { xs: "40rem", sm: "35rem", md: "35rem", lg: "35rem", xl: "35rem", xxl: "35rem"},
          marginTop: { xs: "5rem", sm: "0rem", xl: "4rem" },
          marginLeft: { xs: "5rem" },
        }}
      >


        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            width: { xs: "30%", sm: "30%", md: "30%", lg: "30%", xl: "30%"},
            marginLeft: { xs: "1rem" },
            fontSize:"5rem",
          }}>

          <Typography variant="h1" color="text.secondary">{t("skills.titleOne")}</Typography>
          <Typography variant="h1" color="secondary.dark">{t("skills.titletwo")}</Typography>

            
        </Stack>

        <Stack
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          color="info.dark"
          textAlign="justify"
          gap="2rem"
          sx={{
            height: { xs: "24rem", xl: "20rem" },
            width: { xs: "90%", sm: "90%", md: "80%", lg: "70%", xl: "65%" },
            marginLeft: { xs:"-3rem", sm:"2rem", xl: "2rem"}
          }}>

          <Zoom>
         {skillsAll.map( skills => {
            const {id,icon,text} = skills
            return ( 
            <Stack key={id}>
             <ButtonStyles>{icon}</ButtonStyles>
             <TypographyStyles>{text}</TypographyStyles>
           </Stack>
           )
         })}
          </Zoom>

        </Stack>
      </Stack>
  
    </Stack>  
  )
}

export default Skills