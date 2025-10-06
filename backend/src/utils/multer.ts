import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: "portfolio_projects",
      format: file.mimetype.includes("png") ? "png" : "jpg", 
      transformation: [{ quality: "auto", fetch_format: "auto" }],
    };
  },
});

export const upload = multer({ storage });
