"use server";
import { unstable_noStore as noStore } from "next/cache";
import { ProjectService } from "@/domain/service/ProjectService";
import { HttpProjectRepository } from "@/infrastructure/repositories/HttpProjectRepository";
import { Project } from "@/domain/entities/Project";

const repository = new HttpProjectRepository();
const projectService = new ProjectService(repository);

export const searchProjects = async (title:string): Promise<Project | null> => {
  noStore();
  return await projectService.searchProjectByTitle(title);
};
