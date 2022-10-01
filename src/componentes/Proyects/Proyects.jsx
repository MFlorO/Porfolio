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
      height: {
        xs: "100vh",
        sm: "150vh",
        md: "100vh",
        lg: "100vh",
        xl: "100vh",
      },
    }}
    // backgroundColor="red"
  >
    <Stack
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      marginRight="5.5rem"
      sx={{
        width: "90%",
        height: {
          xs: "100vh",
          sm: "150vh",
          md: "100vh",
          lg: "100vh",
          xl: "35rem",
        },
        marginTop: {
          xl: "1rem",
        },
      }}
      // backgroundColor="blue"
    >


      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          width: {
            xs: "100vh",
            sm: "150vh",
            md: "100vh",
            lg: "100vh",
            xl: "30%",
          },
          height:"10rem",
          marginTop: {
            xl: "6rem",
          },
          fontSize:{
            xs: "100vh",
            sm: "150vh",
            md: "100vh",
            lg: "100vh",
            xl: "5rem",
          }
        }}
        // backgroundColor="green"
      >

        <Stack direction="column" justifyContent="space-around" alignItems="center"
        color="secondary" >
        <Typography variant="h1" color="text.secondary">{t("proyects.titleOne")}</Typography>
        <Typography variant="h1" color="secondary.dark">{t("proyects.titletwo")}</Typography>
        </Stack>
          
      </Stack>

      <Stack
        direction="column"
        justifyContent={"center"}
        color="info.dark"
        textAlign="justify"
        sx={{
          width: {
            xs: "100vh",
            sm: "150vh",
            md: "100vh",
            lg: "100vh",
            xl: "65%",
          },
          marginTop: {
            xl: "4rem",
          },
        }}
      >
              {proyects_data.map((p) => (
        <ProyectsCard p={p} />
      ))}
      </Stack>
    </Stack>

  </Stack>  

  );
}

export default Proyects;
