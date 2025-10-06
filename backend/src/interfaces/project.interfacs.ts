export type UploadedImage = { url?: string; alt?: string, file?: Express.Multer.File };

export interface Project { 
  title: string; 
  summary: string; 
  stack: string[]; 
  images: [] | UploadedImage[];
  repoUrl: string;
  demoUrl?: string;
  coverUrl?: string; 
  createdAt?: string; 
}