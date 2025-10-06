import { Project } from "@/domain/entities/Project";
import { ProjectErrors } from "@/interfaces/project.interfaces";

export const validateProject = (data: Partial<Project>): ProjectErrors => {
    
  const errors: ProjectErrors = {};

  if (!data.title || data.title.trim().length < 3) {
    errors.title = "El título es obligatorio y debe tener al menos 3 caracteres";
  }

  if (!data.summary || data.summary.trim().length < 10) {
    errors.summary = "El resumen es obligatorio y debe tener al menos 10 caracteres";
  }

  return errors;
};
