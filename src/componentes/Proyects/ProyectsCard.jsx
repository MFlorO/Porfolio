import React from 'react'

//MUI
import { Stack } from '@mui/material';

//React Reveal
import Zoom from 'react-reveal/Zoom';

function ProyectsCard({p}) {

  const {name, tecnology, date, image, description} = p

  
   return (
    <Zoom>
    <Stack direction="column" justifyContent="space-around" alignContent="center"
    sx={{
      borderRadius: "7px",
      marginTop:"2rem",
      borderColor:"secondary.dark",
      borderStyle:"solid",
      borderWidth:"3px",
      width: {
        xs: "20rem",
        sm: "150vh",
        md: "100vh",
        lg: "100vh",
        xl: "30rem",
      },
      height: {
        xs: "20rem",
        sm: "150vh",
        md: "100vh", 
        lg: "100vh",
        xl: "22rem",
      },
      backgroundImage:`url(${image})`, 
      backgroundRepeat:"no-repeat", 
      backgroundSize: "cover",
      "&:hover": {
        backgroundColor: "red",
        opacity: "0.5"
        // `${description}`
      },
    }}>
   
        
    </Stack>
    </Zoom>
  )
}

export default ProyectsCard



// style={(width = "100%")}