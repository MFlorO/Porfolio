import React from 'react'

import { BsGithub, BsLinkedin } from "react-icons/bs"

//MUI-CSS-ICONS
import { IconButton, Stack, Link  } from "@mui/material/";


const styles = {
  color:"secondary.dark"
}



function ContactLink() {

  const contact = (href, icon) => {
    return (
      <IconButton>
        <Link  target="_blank"  rel="noopener noreferrer" href={href} sx={styles}> {icon} </Link >
      </IconButton>
    )
  }

  return (
    <Stack direction="row">

        {contact("https://github.com/MFlorO?tab=repositories", <BsGithub size="2rem" />)}
        {contact("https://www.linkedin.com/in/florencia-oldani/", <BsLinkedin size="2rem"/>)}
        
    </Stack>
  )
}

export default ContactLink