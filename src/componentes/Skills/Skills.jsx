import React from 'react'
import skillsAll from "./skills.js"

//Translation
import { useTranslation } from "react-i18next";

//MUI
import { IconButton, Stack, Typography } from "@mui/material/";
import { styled } from '@mui/material/styles';

//React Reveal
import Zoom from 'react-reveal/Zoom';
import { styleFour, styleOne, styleThree, styleTwo } from './skills.styles.js';




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
    <Stack direction="column" justifyContent="space-around" alignItems="center" backgroundColor="background.dark" sx={styleOne}>

      <Stack direction="column" justifyContent="space-around" alignItems="center" marginRight="5.5rem" sx={styleTwo} >

        <Stack direction="column" justifyContent="space-around" alignItems="center" sx={styleThree}>

          <Typography variant="h1" color="text.secondary">{t("skills.titleOne")}</Typography>
          <Typography variant="h1" color="secondary.dark">{t("skills.titletwo")}</Typography>

        </Stack>

        <Stack flexWrap="wrap" justifyContent="center" alignItems="center" color="info.dark" textAlign="justify" gap="2rem" sx={styleFour}>

          <Zoom>
          {skillsAll.map( skills => {
            const {id,icon,text} = skills
            return ( 
            <Stack key={id}>
             <ButtonStyles>{icon}</ButtonStyles>
             <TypographyStyles>{text}</TypographyStyles>
           </Stack> )
           })}
          </Zoom>

        </Stack>
      </Stack>
  
    </Stack>  
  )
}

export default Skills