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

       
        </Stack>

        <Stack backgroundColor="background.main" className={s.overview}>
          <Typography component="p" 
            sx={{ 
              color:"info.dark",
              fontSize:{
               xs:"12px",
               xl: "20px"
             }
             }}>{description}</Typography>


        <Stack className={s.button}>
            <Fab color="secondary" className={s.buttonTwo}>
              <Link target="_blank" rel="noopener noreferrer" href={urlGit}>
                <BsGithub size="1.5rem" color="black" />
              </Link>
            </Fab>
            <Fab color="secondary" className={s.buttonTwo}>
              <Link target="_blank" rel="noopener noreferrer" href={urlLink}>
                <SiWebmoney size="1.5rem" color="black" />
              </Link>
            </Fab>
          </Stack>

        </Stack>
      </Stack>
    </Zoom>
  );
}

export default ProyectsCard;

