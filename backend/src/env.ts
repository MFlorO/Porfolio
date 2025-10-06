import 'dotenv/config';

export const CONFIG = {
    PORT: process.env.PORT,
    CORS_ORIGIN: process.env.CORS_ORIGIN,

    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    CLOUDINARY_FOLDER: process.env.CLOUDINARY_FOLDER,

    PROJECT_CREATED_AUTH_KEY: process.env.PROJECT_CREATED_AUTH_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY
};