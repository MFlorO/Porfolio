import { ProjectRepository } from "@/domain/repositories/ProjectRepository";
import { Project } from "@/domain/entities/Project";

export class ProjectService {
  constructor(private projectRepository: ProjectRepository) {}

  async createProject(project: Project, authKey: string): Promise<Project> {
    if (!project.title) {
      throw new Error("El proyecto debe tener un título");
    }
    if (!project.summary) {
      throw new Error("El proyecto debe tener un resumen");
    }
    return await this.projectRepository.createProject(project, authKey);
  }

  async listProjects(): Promise<Project[]> {
    return await this.projectRepository.getProjects();
  }

  async getProject(id: string): Promise<Project | null> {
    return await this.projectRepository.getProjectById(id);
  }

  async searchProjectByTitle(id: string): Promise<Project[] | null> {
    return await this.projectRepository.getProjectByTitle(id);
  }
}
