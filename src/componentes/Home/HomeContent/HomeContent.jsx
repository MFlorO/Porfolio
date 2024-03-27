import React from 'react'
import ContactLink from "../../ContactLink/ContactLink";
import Zoom from 'react-reveal/Zoom';
import {  Stack, Typography } from "@mui/material/";
import { styleOne, styleThree, styleTwo } from './homeContent.style';

function HomeContent() {
  return (
    <>
      <Stack direction="column" justifyContent="space-around" alignItems="center" sx={styleTwo}>
        <Zoom>
          <Stack direction="column" justifyContent="flex-start" alignItems="center" color="secondary">
            <Typography variant="h1" fontSize={styleThree} color="text.secondary">FLORENCIA</Typography>
            <Typography variant="h1" fontSize={styleThree} color="secondary.dark">OLDANI</Typography>
            <Typography variant='h1' component='h3'  color='text.primary' sx={styleOne}>Developer Full Stack</Typography>
          </Stack>
          <ContactLink />
        </Zoom> 
      </Stack>
    </>
  )
}

export default HomeContent