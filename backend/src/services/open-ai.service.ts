import axios from "axios";
import { IAService } from "../interfaces/chat.interface";

const { CONFIG } = require('../env');

export class OpenAIService implements IAService {
  private apiKey: string;

  constructor() {
    if (!CONFIG.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY no está definida en la configuración.");
    }
    this.apiKey = CONFIG.OPENAI_API_KEY;
  }

  async generateResponse(userMessage: string): Promise<string> {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "Eres un asistente que responde sobre Flor y sus proyectos.",
            },
            { role: "user", content: userMessage },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data.choices[0].message.content;
    } catch (error: any) {
      console.error("Error IA:", error.response?.data || error.message);
      return "Lo siento, hubo un error generando la respuesta.";
    }
  }
}
