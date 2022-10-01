import React from 'react'

//MUI
import {Container} from '@mui/material';



function ProyectsCard({p}) {

  const {name, tecnology, date, image, description} = p

  return (
    <Container maxWidth="sm">
      <h1>{name}</h1>
      <p>{description}</p>
      {/* <img src={image} alt=""/> */}
        
    </Container>
  )
}

export default ProyectsCard