import React from 'react'

//MUI
import { IconButton, Stack, Typography } from "@mui/material/";

//Translation
import { useTranslation } from "react-i18next";

//React Icons
import { CgFigma } from "react-icons/cg"
import {SiCss3, SiChakraui, SiHtml5, SiRedux, SiSequelize, SiPostgresql, SiTrello, SiJavascript} from "react-icons/si"
import { FaReact } from "react-icons/fa"
import {DiNodejs} from "react-icons/di"
import {HiOutlineMailOpen} from "react-icons/hi"

//React Reveal
import Zoom from 'react-reveal/Zoom';

import { styled } from '@mui/material/styles';



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
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor="background.dark"
      sx={{
        width: "100%",
        height: {
          xs: "100vh",
          sm: "100vh",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
        },
      }}
      // backgroundColor="red"
    >
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        marginRight="5.5rem"
        sx={{
          width: "90%",
          height: {
            xs: "35rem",
            sm: "150vh",
            md: "100vh",
            lg: "100vh",
            xl: "35rem",
          },
          marginTop: {
            xs: "-12rem",
            xl: "4rem",
          },
          marginLeft: {
            xs: "5rem",
            // xl: "4rem",
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
            marginLeft: {
              xs: "1rem",
            },
            fontSize:"5rem",
            
          }}
        >

          <Typography variant="h1" color="text.secondary">{t("skills.titleOne")}</Typography>
          <Typography variant="h1" color="secondary.dark">{t("skills.titletwo")}</Typography>

            
        </Stack>

        <Stack
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          color="info.dark"
          textAlign="justify"
          // backgroundColor="red"
          gap="2rem"
          sx={{
            height: {
              xs: "24rem",
              // sm: "150vh",
              // md: "100vh",
              // lg: "100vh",
              xl: "20rem",
            },
            width: {
              xs: "90%",
              sm: "150vh",
              md: "100vh",
              lg: "100vh",
              xl: "65%",
            },
            marginLeft: {
              xl: "2rem",
            }
          }}
        >
          <Zoom>
          <Stack>
            <ButtonStyles><SiJavascript /></ButtonStyles>
            <TypographyStyles>JAVASCRIPT</TypographyStyles>
          </Stack>
          <Stack>
            <ButtonStyles><DiNodejs /></ButtonStyles>
            <TypographyStyles>NODE JS</TypographyStyles>
          </Stack>
          <Stack>
            <ButtonStyles><SiPostgresql /></ButtonStyles>
            <TypographyStyles>POSTGRESQL</TypographyStyles>
          </Stack>
          <Stack>
            <ButtonStyles><SiSequelize /></ButtonStyles>
            <TypographyStyles>SEQUELIZE</TypographyStyles>
          </Stack>
          <Stack>
            <ButtonStyles><FaReact /></ButtonStyles>
            <TypographyStyles>REACT</TypographyStyles>
          </Stack>
          <Stack>
            <ButtonStyles><SiRedux /></ButtonStyles> 
            <TypographyStyles>REDUX</TypographyStyles>
          </Stack>
          <Stack>
            <ButtonStyles><CgFigma /></ButtonStyles>
            <TypographyStyles>FIGMA</TypographyStyles> 
          </Stack>
          <Stack>
            <ButtonStyles><SiChakraui /></ButtonStyles>
            <TypographyStyles>CHAKRA</TypographyStyles>
          </Stack>
          <Stack>
            <ButtonStyles><SiCss3 /></ButtonStyles>
            <TypographyStyles>CSS</TypographyStyles>
          </Stack>
          <Stack>
            <ButtonStyles><SiHtml5 /></ButtonStyles>
            <TypographyStyles>HTML</TypographyStyles>
          </Stack>
          <Stack>
            <ButtonStyles><HiOutlineMailOpen /></ButtonStyles>
            <TypographyStyles>EMAIL JS</TypographyStyles>
          </Stack>
          <Stack>
            <ButtonStyles><SiTrello /></ButtonStyles>
            <TypographyStyles>TRELLO</TypographyStyles>
          </Stack>
          </Zoom>

        </Stack>
      </Stack>
      

    </Stack>  
  )
}

export default Skills