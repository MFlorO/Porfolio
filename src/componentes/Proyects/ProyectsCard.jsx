import React from 'react'

//MUI
import {Stack, Typography} from '@mui/material';
import s from "./ProyectsCard.module.css"

//React Reveal
import Zoom from 'react-reveal/Zoom';

function ProyectsCard({p}) {

  const {name, tecnology, date, image, description} = p

  return (
    <Zoom>
    <Stack direction="column" justifyContent="space-around" alignContent="center"
    sx={{
      borderColor:"secondary.dark",
      width: {
        xs: "100vh",
        sm: "150vh",
        md: "100vh",
        lg: "100vh",
        xl: "32rem",
      },
      height: {
        xs: "100vh",
        sm: "150vh",
        md: "100vh",
        lg: "100vh",
        xl: "20rem",
      },
    }}>
      {/* <Typography color="text.secondary">{name}</Typography> */}
      {/* <p>{description}</p> */}
      <div></div>
      <img src={image} className={s.img} alt=""/>
        
    </Stack>
    </Zoom>
  )
}

export default ProyectsCard



// style={(width = "100%")}