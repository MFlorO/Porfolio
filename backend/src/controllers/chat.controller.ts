import { Request, Response } from "express";
import { ChatService } from "../services/chat.service";


export class ChatController {

  static async askPrompt(req: Request, res: Response) {

    const { prompt } = req.body;

    if (!prompt) return res.status(400).json({ error: "El prompt es requerido" });

    try {
      const result = await ChatService.handleResponsePrompt(prompt);
      console.log("Respuesta de AI:", JSON.stringify(result, null, 2)); 
      res.status(201).json(result);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
      res.status(500).json({
        error: error instanceof Error ? error.message : 'Error desconocido',
      });
    }

  }
}

