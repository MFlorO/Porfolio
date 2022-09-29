import React from "react";
import ProyectsCard from "./ProyectsCard.jsx";
import country from "./countryApp.png"
import henry from "./libreriaHenry.png"

//Translation
import { useTranslation } from "react-i18next";

//MUI
import { Stack } from "@mui/material/";


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
    <Stack height={"100vh"} backgroundColor="background.dark" marginTop={"3.5rem"} >
      <h2>{t("proyects.title")}</h2>
      {proyects_data.map((p) => (
        <ProyectsCard p={p} />
      ))}
    </Stack>
  );
}

export default Proyects;
