import { Request, Response } from "express";
import { ProjectService } from "../services/project.service";
import { Project } from "../interfaces";
const { CONFIG } = require('../env');

export class ProjectController {
  static async create(req: Request, res: Response) {
    try {

      const authKey = req.query.authKey as string;
      if (!authKey || authKey === "") {
        return res.status(401).json({ error: "No esta autorizado para crear un proyecto." });
      }

      if (authKey !== CONFIG.PROJECT_CREATED_AUTH_KEY) {
        return res.status(400).json({ error: "Clava de autorización incorrecta" });
      }
    
      const { title, summary, stack, repoUrl, demoUrl, images } = req.body;

      if (!title || !summary) {
        return res.status(400).json({ error: "Title and description are required" });
      }

      const files = req.files as Express.Multer.File[];

      const project: Project = {
        title,
        summary,
        repoUrl,
        demoUrl,
        stack,
        images: files.map(f => ({ file: f, alt: f.originalname }))
      };

      const createdProject = await ProjectService.createProject(project);

      res.status(201).json(createdProject);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error instanceof Error ? error.message : "Error creating project" });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const projects = await ProjectService.getAllProjects();

      if (!projects) {
        return res.status(404).json({ error: "Projects not found" });
      }

      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: "Error fetching projects" });
    }
  }

  static async searchByTitle(req: Request, res: Response) {
    try {
      const { title } = req.query;
      if (!title || typeof title !== "string") {
        return res.status(400).json({ error: "Title is required" });
      }

      const projects = await ProjectService.searchProjectsByTitle(title);
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }
  
}
