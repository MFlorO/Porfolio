import React from "react";

//React Reveal
import Zoom from "react-reveal/Zoom";

import { Fab, Stack, Link, Typography } from "@mui/material";
import { BsGithub } from "react-icons/bs";
import { SiWebmoney } from "react-icons/si";
import s from "./ProyectsCard.module.css";

function ProyectsCard({ p }) {
  const { name, tecnology, image, description, urlGit, urlLink } = p;

  return (
    <Zoom>
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

        <Stack      sx={{ 
          color:"info.dark",
          fontSize:{
           xs:"3rem",
           xl: "3rem"
         },
          backgroundColor:"background.main" ,
          // "&:hover":{
          //   backgroundColor:"red" 
          // }
         }} className={s.overview}>
          <Typography component="p" >{description}</Typography>
        </Stack>
      </Stack>
    </Zoom>
  );
}

export default ProyectsCard;

// style={(width = "100%")}
