import { Project } from "../../interfaces";

export const projectsData:Project[] = [
  {
    title: "EMIRAT propiedades",
    summary: "Descripción de EMIRAT propiedades",
    stack: ["Javascript", "Next js", "React js", "Next js", "Google maps", "Css"],
    images: [{
        url:"src/data/seed/assets/emiratpropiedades.png",
        alt:"imagen 1"
    }],
    repoUrl: "https://github.com/MFlorO/emirat-web",
    demoUrl: "https://emirat-web.vercel.app/"
  },
  {
    title: "Libreria Henry",
    summary: "Descripción Libreria Henry",
    stack: ["Javascript","Express js","React js","Redux","Postgres sql","Sequelize","Css","Figma","Firebase","MercadoPago","Chakra react"],
    images: [{
      url:"src/data/seed/assets/libreriaHenry.png",
      alt:"imagen 1"
    }], 
    repoUrl: "https://github.com/jovanad29/FE-HenryLibrary",
    demoUrl: "https://henry-library.netlify.app/"
  }
];