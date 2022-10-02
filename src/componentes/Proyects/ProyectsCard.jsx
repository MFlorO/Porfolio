import React from "react";

//React Reveal
import Zoom from "react-reveal/Zoom";

import { Fab, Stack, Link, Typography } from "@mui/material";
import { BsGithub } from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";
import s from "./ProyectsCard.module.css";

function ProyectsCard({ p }) {
  const { name, tecnology, date, image, description, urlGit, urlLink } = p;

  return (
    <Zoom>
      {/* <Stack position="relative" direction="column" justifyContent="space-around" alignContent="center"
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
      // backgroundImage:`url(${image})`, 
      // backgroundRepeat:"no-repeat", 
      // backgroundSize: "cover",
      // "&:hover": {
      //   backgroundColor: "red",
      //   opacity: "0.5",
      // },
    }}>

     <Stack>
      <Fab color="secondary" >
      <Link  target="_blank"  rel="noopener noreferrer" href={urlGit}>
          <BsGithub size="2rem" color='black'/></Link >
      </Fab>
    </Stack>
   

    <Stack>
      <Fab color="secondary" >
      <Link  target="_blank"  rel="noopener noreferrer" href={urlLink}>
          <SiWebmoney size="2rem" color='black'/></Link >
      </Fab>
    </Stack>


    </Stack>

    <Stack className={s.overview}>
      <p>{description}</p>
    </Stack> */}

      <Stack borderColor="secondary.dark" className={s.proyects}>
        <img src={image} alt={name} />

        <Stack color="title.primary" className={s.proyectsInfo}>
          <Typography variant="h3" sx={{fontSize:{xs: "2rem", xl: "2.5rem"}}}
          className={s.h3}>
            {name}
          </Typography>
          <span>{tecnology.join(", ")}</span>

          <Stack className={s.button}>
            <Fab color="secondary">
              <Link target="_blank" rel="noopener noreferrer" href={urlGit}>
                <BsGithub size="2rem" color="black" />
              </Link>
            </Fab>
            <Fab color="secondary">
              <Link target="_blank" rel="noopener noreferrer" href={urlLink}>
                <SiWebmoney size="2rem" color="black" />
              </Link>
            </Fab>
          </Stack>
        </Stack>

        <Stack className={s.overview}>
          <Typography component="p" color="title.primary">{description}</Typography>
        </Stack>
      </Stack>
    </Zoom>
  );
}

export default ProyectsCard;

// style={(width = "100%")}
