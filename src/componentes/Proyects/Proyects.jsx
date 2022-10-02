import React from "react";
import ProyectsCard from "./ProyectsCard.jsx";
import country from "./countryApp.png"
import henry from "./libreriaHenry.png"

//MUI
import { Stack, Typography } from "@mui/material/";

//Translation
import { useTranslation } from "react-i18next";


function Proyects() {
  const { t } = useTranslation();

  const proyects_data = [
    {
      id: 1,
      name: "CountriesApp",
      tecnology: [
        "Javascript",
        "Express js",
        "React js",
        "Redux",
        "Postgres sql",
        "Sequelize",
        "Css",
      ],
      date: "08/2022",
      image: country,
      description:`${t("proyects.description")}`
    },
    {
      id: 1,
      name: "Libreria Henry",
      tecnology: [
        "Javascript",
        "Express js",
        "React js",
        "Redux",
        "Postgres sql",
        "Sequelize",
        "Css",
        "Figma",
        "Firebase",
        "MercadoPago",
        "Chakra react",

      ],
      date: "09/2022",
      image: henry,
      description: "",
    },
  ];


  return (
    <Stack
    direction="column"
    justifyContent={"center"}
    alignItems={"center"}
    backgroundColor="background.dark"
    sx={{
      width: "100%",
      height: "100vh",
    }}
    // backgroundColor="red"
  >
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "90%",
        height: {
          xs: "60rem",
          // sm: "150vh",
          // md: "100vh",
          // lg: "100vh",
          xl: "38rem",
        },
        marginTop: {
          xl: "5rem",
        },
      }}
      // backgroundColor="blue"
    >


      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: {
            xs: "100vh",
            sm: "150vh",
            md: "100vh",
            lg: "100vh",
            xl: "30%",
          }
        }}
      >  
        <Typography variant="h1" sx={{fontSize:{xs: "3.5rem", xl: "5rem"}}} color="text.secondary">{t("proyects.titleOne")}</Typography>
        <Typography variant="h1" sx={{fontSize:{xs: "3.5rem", xl: "5rem"}}} color="secondary.dark">{t("proyects.titletwo")}</Typography>
    
          
      </Stack>

      <Stack
        direction="row"
        // justifyContent="center"
        alignContent="center"
        // backgroundColor="red"
        color="info.dark"
        sx={{
          flexDirection:{
            xs: "column",
            xl: "row"
          },
          justifyContent:{
            xs:"space-around",
            xl:"center"
          },
          width: {
            xs: "100%",
            sm: "150vh",
            md: "100vh",
            lg: "100vh",
            xl: "100%",
          },
          height:{
            xs: "80%",
            xl: "70%"
          },
          marginTop: {
            xl: "2rem",
          },
          gap:{
            xs: "1rem",
            xl: "5rem"
          }
        }}
      >
        
        
              {proyects_data.map((p,index) => {
                return(
                <div key={index}>
                <ProyectsCard p={p} />
                </div>

              )})}
        

      </Stack>
    </Stack>

  </Stack>  

  );
}

export default Proyects;
