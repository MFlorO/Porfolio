import React from "react";

import { Stack, Box, Button, Typography } from "@mui/material/";

function AboutMe() {
  return (
    <Stack height={"100vh"} backgroundColor="background.dark" marginTop={"3.5rem"} >
      <Box>
        <Typography>
          Como te dije, voy a contarte un poco sobre mi para que puedas conocerme. Soy Desarroladora Full Stack. 
          Pero eso no es algo que no te haya dicho antes. Lo que si, soy apasionada por el conocimiento, 
          creo que el interés y la persistencia son la clave para aprender cualquier cosa. Y ami me sobra de las dos. 
          Me apasiona y desafía aprender cosas nuevas.
        </Typography>
        <Typography>
          La programacion me genera eso. Mucho interés y curiosidad por el saber. Es un mundo muy amplio en el que constantemente 
          surgen nuevas tecnologías, nuevas versiones o nuevas herramientas. Este constante cambio me mantiene siempre entretenida
          y con ganas de superarme.
        </Typography>
        <Typography>
          No te aseguro que sepa tdo, pero lo que si te puedo asegurar es que voy a ser insistente. Voy a preguntar, voy a investigar 
          y no voy a parar hasta aprender lo que necesito.
        </Typography>
        <Typography>
          Fuera de la programación, lo que me apasiona es lo social, me gusta compartir momentos con mis amigos y familia. Ademas,
          como a la mayoría, me gusta viajar para desconectarme y así luego poder conectar mejor 
        </Typography>
      </Box>
      <Button>Descargar CV</Button>
    </Stack>
  );
}

export default AboutMe;
