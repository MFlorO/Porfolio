import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpProjectRepository } from "@/infrastructure/repositories/HttpProjectRepository";
import { ProjectService } from "@/domain/service/ProjectService";
import { Project } from "@/domain/entities/Project";

const projectRepo = new HttpProjectRepository();
const projectService = new ProjectService(projectRepo);

export const createProjectThunk = createAsyncThunk<
  Project,                                   // tipo de retorno en caso de éxito
  { project: Project; authKey: string },     // argumento
  { rejectValue: string }                    // tipo de error que vamos a rechazar
>(
  "projects/create",
  async ({ project, authKey }, { rejectWithValue }) => {
    try {
      const response = await projectService.createProject(project,authKey);
      return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.error || error.message || "Error desconocido"
      );
    }
  }
);


export const fetchProjectsThunk = createAsyncThunk<Project[], void, { rejectValue: string }>(
  "projects/fetchprojects",
  async (_, { rejectWithValue }) => {
    try {
      const result = await projectService.listProjects();
      console.log('result.project: ', result); 
      return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.error || error.message || "Error cargando proyectos"
      );
    }
  }
);