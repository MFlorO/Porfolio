import { useState, useEffect } from "react";
import country from "./countryApp.png"
import henry from "./libreriaHenry.png"

//Translation
import { useTranslation } from "react-i18next";





function useHookProyects() {

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
    id: 2,
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

  const [copia, setCopia] = useState(proyects_data) //Creo una copia de la "data"


  const [currentPage, setCurrentPage] = useState(0) //Estado para manejar la pagina
	
	const itemsPerPage = 2


  const proyectsSlice = () =>  copia.slice(currentPage, currentPage + itemsPerPage) 

  return [proyectsSlice, currentPage , setCurrentPage, itemsPerPage, copia]
}

export default useHookProyects