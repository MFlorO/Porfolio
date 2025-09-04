import { Project } from "@/domain/entities/Project";

export interface ProjectRepository {
  getProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | null>;
  createProject(project: Project, authKey:string): Promise<Project>;
  getProjectByTitle(title: string): Promise<Project | null>;
}
