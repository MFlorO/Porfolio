import React from 'react'

import { BsGithub, BsLinkedin } from "react-icons/bs"

//MUI-CSS-ICONS
import { IconButton, Stack } from "@mui/material/";




function ContactLink() {

  const linkedin = () =>{
  
  }

  const github = () =>{
  
  }

  return (
    <Stack direction="row">
        <IconButton><BsGithub size="2rem" onClick={github}/></IconButton>
        <IconButton><BsLinkedin size="2rem" onClick={linkedin}/></IconButton>
        <IconButton></IconButton>
    </Stack>
  )
}

export default ContactLink