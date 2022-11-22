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
      image: country,
      description:`${t("proyects.descriptionCountries")}`,
      urlGit:"https://github.com/MFlorO/Countries-app-front",
      urlLink:"https://countries-flor.netlify.app/"
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
      image: henry,
      description: `${t("proyects.descriptionhenry")}`,
      urlGit:"https://github.com/jovanad29/FE-HenryLibrary",
      urlLink:"https://henry-library.netlify.app/"
    },
  ];


  return (
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    backgroundColor="background.dark"
    sx={{
      width: "100%",
      height:{
        xs: "120vh",
        sm: "110vh",
        md: "100vh",
        lg: "100vh",
        xl: "100vh",
      },
    }}
  >
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "90%",
        height: {
          xs: "50rem",
          sm: "40rem",
          md: "40rem",
          lg: "38rem",
          xl: "38rem",
        },
        marginTop: {
          xs: "7rem",
          xl: "0rem",
        },
        marginLeft: {
          xs: "6rem",
        },
      }}
      // backgroundColor="blue"
    >


      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        // backgroundColor="green"
        sx={{
          width: {
            xs: "30%",
            sm: "150vh",
            md: "100vh",
            lg: "100vh",
            xl: "30%",
          },
          marginBottom: {
            xs: "3rem",
            xl: "0rem",
          },
          marginRight: {
            xs: "6rem",
          },
        }}
      >  
        <Typography variant="h1" sx={{fontSize:{xs: "3.5rem", xl: "5rem"}, color:"text.secondary"}} >{t("proyects.titleOne")}</Typography>
        <Typography variant="h1" sx={{fontSize:{xs: "3.5rem", xl: "5rem"}}} color="secondary.dark">{t("proyects.titletwo")}</Typography>
    
          
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignContent="center"
        // backgroundColor="red"
        color="info.dark"
        sx={{
          flexDirection:{
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
            xxl: "row"
          },
          justifyContent:{
            xs:"space-around",
            xl:"center"
          },
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          },
          height:{
            xs: "90%",
            xl: "70%"
          },
          marginTop: {
            xl: "2rem",
          },
          gap:{
            xs: "0rem",
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
