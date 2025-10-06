import fs from "fs";
import path from "path";
import { prisma } from "../../config/prisma";
import cloudinary from "../../config/cloudinary";
import { projectsData } from "./data";


async function uploadToCloudinary(filePath: string) {
  return new Promise<{ url: string }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: process.env.CLOUDINARY_FOLDER },
      (err, result) => {
        if (err) return reject(err);
        resolve({ url: result!.secure_url });
      }
    );
    fs.createReadStream(filePath).pipe(stream);
  });
}

async function main() {

  await prisma.projectImage.deleteMany();
  await prisma.project.deleteMany();

  console.log("Base de datos limpiada ✅");

  for (const p of projectsData) {
    const imagesData = [];

    if (p.images && p.images.length > 0) {
      for (const img of p.images) {
        if(!img || !img.url) return;
        const result = await uploadToCloudinary(path.resolve(img.url)); // Subimos la imagen a Cloudinary
        imagesData.push({ url: result.url, alt: img.alt });
      }
    }

    await prisma.project.create({
      data: {
        title: p.title,
        summary: p.summary,
        repoUrl: p.repoUrl,
        demoUrl: p.demoUrl,
        stack: p.stack,
        images: { create: imagesData },
      },
    });

    console.log(`Proyecto "${p.title}" creado`);
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
