import { ProjectId } from "../value-objects/ProjectId";

export type ProjectImages = { url: string; alt?: string, file?: File }[];

export interface Project { 
    id: ProjectId; 
    title: string; 
    summary: string; 
    stack: string[]; 
    repoUrl: string;
    demoUrl?: string;
    createdAt?: string; 
    images: ProjectImages;
}