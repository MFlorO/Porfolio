import React from 'react'

import { BsGithub, BsLinkedin } from "react-icons/bs"

//MUI-CSS-ICONS
import { IconButton, Stack, Link  } from "@mui/material/";


const styles = {
  color:"secondary.dark"
}

function ContactLink() {


  return (
    <Stack direction="row">
        <IconButton>
          <Link  target="_blank"  rel="noopener noreferrer" href="https://github.com/MFlorO?tab=repositories" sx={styles}>
          <BsGithub size="2rem" /></Link >
        </IconButton>

        <IconButton>
          <Link  target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/florencia-oldani-a59647157/v" sx={styles}>
            <BsLinkedin size="2rem"/></Link >
        </IconButton>
        
    </Stack>
  )
}

export default ContactLink