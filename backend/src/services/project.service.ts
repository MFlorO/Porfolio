import cloudinary from "../config/cloudinary";
import { prisma } from "../config/prisma"
import { Project, UploadedImage } from "../interfaces/project.interfacs";

export class ProjectService {
  
  static async createProject(data: Project) {

    const uploadedImages: UploadedImage[] = [];

    for (const img of data.images || []) {

      if (!img.file) continue; 

      const result: any = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: process.env.CLOUDINARY_FOLDER },
          (err, res) => (err ? reject(err) : resolve(res))
        );
        img.file && stream.end(img.file.buffer);
      });

      if (result?.secure_url) {
        uploadedImages.push({ url: result.secure_url, alt: img.alt });
      }
    }

    console.log('data-BACKEND: ', {
        title: data.title,
        summary: data.summary,
        repoUrl: data.repoUrl,
        demoUrl: data.demoUrl,
        stack: data.stack,
        images: {
          create: uploadedImages.map(img => ({
            url: img.url!,
            alt: img.alt
          }))
        }
      })

    return await prisma.project.create({
      data: {
        title: data.title,
        summary: data.summary,
        repoUrl: data.repoUrl,
        demoUrl: data.demoUrl,
        stack: data.stack,
        images: {
          create: uploadedImages.map(img => ({
            url: img.url!,
            alt: img.alt
          }))
        }
      },
      include: {
        images: true
      }
    });
  }

  static async getAllProjects() {
    return prisma.project.findMany({
      include: { images: true },
      orderBy: { createdAt: "desc" },
    });
  }

  static async searchProjectsByTitle(title: string) {
    return prisma.project.findMany({
      where: {
        title: {
          contains: title,  
          mode: "insensitive"
        }
      },
      include: { images: true },
      orderBy: { createdAt: "desc" },
    });
  }

}
