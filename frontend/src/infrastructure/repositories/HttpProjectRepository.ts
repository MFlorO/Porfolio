import { ProjectRepository } from "@/domain/repositories/ProjectRepository";
import { Project } from "@/domain/entities/Project";
import { http } from "@/lib/httpClient";

export class HttpProjectRepository implements ProjectRepository {

  async getProjects(): Promise<Project[]> {
    return await http<Project[]>("/projects");
  }

  async getProjectById(id: string): Promise<Project | null> {
    try {
      return await http<Project>(`/projects/${id}`);
    } catch (error) {
      console.error(`Error fetching project ${id}:`, error);
      return null;
    }
  }

  // async createProject(project: Project, authKey: string): Promise<Project> {
  //   return await http<Project>(`/projects?authKey=${authKey}`, {
  //     method: "POST",
  //     body: JSON.stringify(project),
  //   });
  // }

  async createProject(project: Project, authKey: string): Promise<Project> {

    const formData = new FormData();

    formData.append("title", project.title);
    formData.append("summary", project.summary);
    formData.append("repoUrl", project.repoUrl);
    if (project.demoUrl) formData.append("demoUrl", project.demoUrl);
    // formData.append("stack", JSON.stringify(project.stack));
    project.stack.forEach((tech) => formData.append("stack[]", tech));

    (project.images || []).forEach((img) => {
      if (img.file) formData.append("images", img.file);
    });

    console.log('FORMDATA: ', formData)

    const res = await fetch(`/api/projects?authKey=${authKey}`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Error creando proyecto");

    return res.json();
  }

  async getProjectByTitle(title: string): Promise<Project | null> {
    try {
      return await http<Project>(`/projects/search?title=${title}`);
    } catch (error) {
      console.error(`Error fetching projects that contains the word ${title}:`, error);
      return null;
    }
  }

}
