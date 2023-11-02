import { useState } from "react";

//img - video
import emirat from "./assets/Emiratpropiedades.png"
import country from "./assets/countryApp.png"
import henry from "./assets/libreriaHenry.png"
import electronics from "./assets/Electronics.mp4"
import starWars from "./assets/StarWars.mp4"

//Translation
import { useTranslation } from "react-i18next";




function useHookProyects() {

  const { t } = useTranslation();
 
  
const proyects_data = [
  {
    id: 1,
    name: "EMIRAT propiedades",
    tecnology: [
      "Javascript",
      "Next js",
      "React js",
      "Next js",
      "Google maps",
      "Css",
    ],
    image: emirat,
    video: "",
    description:`${t("proyects.descriptionEmirat")}`,
    urlGit:"https://github.com/MFlorO/emirat-web",
    urlLink:"https://emirat-web.vercel.app/"
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
    video: "",
    description: `${t("proyects.descriptionhenry")}`,
    urlGit:"https://github.com/jovanad29/FE-HenryLibrary",
    urlLink:"https://henry-library.netlify.app/"
  },
  {
    id: 3,
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
    video: "",
    description:`${t("proyects.descriptionCountries")}`,
    urlGit:"https://github.com/MFlorO/Countries-app-front",
    urlLink:"https://countries-flor.netlify.app/"
  },
  {
    id: 4,
    name: "Electronics",
    tecnology: [
      "Javascript",
      "React js",
      "Redux",
      "Hooks",
      "Scss",
    ],
    image: "",
    video: electronics,
    description: `${t("proyects.descriptionElectronics")}`,
    urlGit:"https://github.com/MFlorO/challengeAeroLab_Javascript-React-Hook-Sass",
    urlLink:""
  },
  {
    id: 5,
    name: "StarWars",
    tecnology: [
      "Next Js",
      "Javascript",
      "React js",
      "Tailwinds",
    ],
    image: "",
    video: starWars,
    description: `${t("proyects.descriptionStarWars")}`,
    urlGit:"https://github.com/MFlorO/Wannabe-NextJS",
    urlLink:"https://wannabe-next-js.vercel.app/"
  },
];

  const [copia, setCopia] = useState(proyects_data) //Creo una copia de la "data"


  const [currentPage, setCurrentPage] = useState(0) //Estado para manejar la pagina
	
	const itemsPerPage = 2

  const proyectsSlice = () =>  copia.slice(currentPage, currentPage + itemsPerPage) 

  return [proyectsSlice, currentPage , setCurrentPage, itemsPerPage, copia]
}

export default useHookProyects