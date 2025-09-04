import { GoogleGenAI } from "@google/genai";
import { HttpError } from "../utils";
import { askPromptUseCase } from "../use-cases/askPrompt.uses-cases";
import { CONFIG } from "../env";

export class ChatService {

  private static gemini = new GoogleGenAI({
    apiKey: CONFIG.GEMINI_API_KEY
  });

  static async handleResponsePrompt(prompt: string) {
    try {

      if (!prompt) {
        throw new HttpError("El campo prompt es obligatorio", 400);
      }

      const maxRetries = 3;
      let attempt = 0;

      while (attempt < maxRetries) {
        try {

          const response = await askPromptUseCase(this.gemini, { prompt });
          return { data: response };

        } catch (err: any) {

          const status = err?.status || err?.statusCode || 500;
          const message =
            err?.message ||
            "Ocurrió un error inesperado al procesar la respuesta de AI";

          if (status === 503) {
            attempt++;
            console.warn(`Modelo sobrecargado. Reintentando (${attempt}/${maxRetries})...`);
            await new Promise((res) => setTimeout(res, 2000 * attempt));
          }
          else if (status === 429) {
            console.warn("Se superó el límite de la cuota de Gemini");
            throw new HttpError(
              "Lo lamento. Se superó el límite de la cuota de Gemini. Espera a que se renueve.",
              429
            );
          }
          else {
            throw new HttpError(message, status);
          }
        }
      }

      throw new HttpError("El modelo está sobrecargado. Intenta de nuevo más tarde.", 503);

    } catch (error: any) {
      console.error("Error de AI:", error);
      return {
        code: error instanceof HttpError ? error.statusCode : 500,
        message: error instanceof HttpError ? error.message : "Error inesperado",
      };
    }
  }
}
