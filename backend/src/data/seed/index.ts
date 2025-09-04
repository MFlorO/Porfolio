;
import fs from "fs";
import path from "path";
import cloudinary from "../../config/cloudinary";
import { prisma } from "../../config/prisma";


const projects = [
  {
    name: "EMIRAT propiedades",
    tecnology: ["Javascript", "Next js", "React js", "Next js", "Google maps", "Css"],
    image: "./seeds/images/emirat.png",
    video: "",
    description: "Descripción de EMIRAT propiedades",
    urlGit: "https://github.com/MFlorO/emirat-web",
    urlLink: "https://emirat-web.vercel.app/"
  },
  {
    name: "Libreria Henry",
    tecnology: ["Javascript","Express js","React js","Redux","Postgres sql","Sequelize","Css","Figma","Firebase","MercadoPago","Chakra react"],
    image: "./seeds/images/henry.png",
    video: "",
    description: "Descripción Libreria Henry",
    urlGit: "https://github.com/jovanad29/FE-HenryLibrary",
    urlLink: "https://henry-library.netlify.app/"
  },
  {
    name: "CountriesApp",
    tecnology: ["Javascript","Express js","React js","Redux","Postgres sql","Sequelize","Css"],
    image: "./seeds/images/country.png",
    video: "",
    description: "Descripción CountriesApp",
    urlGit: "https://github.com/MFlorO/Countries-app-front",
    urlLink: "https://countries-flor.netlify.app/"
  },
  {
    name: "Electronics",
    tecnology: ["Javascript","React js","Redux","Hooks","Scss"],
    image: "",
    video: "./seeds/videos/electronics.mp4",
    description: "Descripción Electronics",
    urlGit: "https://github.com/MFlorO/challengeAeroLab_Javascript-React-Hook-Sass",
    urlLink: ""
  },
  {
    name: "StarWars",
    tecnology: ["Next Js","Javascript","React js","Tailwinds"],
    image: "",
    video: "./seeds/videos/starWars.mp4",
    description: "Descripción StarWars",
    urlGit: "https://github.com/MFlorO/Wannabe-NextJS",
    urlLink: "https://wannabe-next-js.vercel.app/"
  },
];

// Función para subir archivos a Cloudinary
async function uploadToCloudinary(filePath: string, folder = "projects") {
  return new Promise<{ url: string }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (err, result) => {
        if (err) return reject(err);
        resolve({ url: result!.secure_url });
      }
    );
    fs.createReadStream(filePath).pipe(stream);
  });
}

async function main() {
  for (const p of projects) {
    const imagesData = [];
    let videoData = null;

    if (p.image) {
      const result = await uploadToCloudinary(path.resolve(p.image));
      imagesData.push({ url: result.url, alt: p.name });
    }

    if (p.video) {
      const result = await uploadToCloudinary(path.resolve(p.video));
      videoData = result.url;
    }

    await prisma.project.create({
      data: {
        title: p.name,
        summary: p.description,
        repoUrl: p.urlGit,
        demoUrl: p.urlLink,
        stack: p.tecnology,
        images: { create: imagesData },
        // Si quisieras guardar el video en otro modelo, deberías crear ProjectVideo y agregarlo aquí
      },
    });

    console.log(`Proyecto "${p.name}" creado`);
  }
}

main()
.catch((e) => {
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  await prisma.$disconnect();
});
