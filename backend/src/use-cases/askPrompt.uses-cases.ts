import { GoogleGenAI } from "@google/genai";
import personalData from "../data/personalData.json";
import { HttpError } from "../utils";

interface Options {
  prompt: string;
}

export const askPromptUseCase = async (gemini: GoogleGenAI, options: Options) => {
  const { prompt } = options;

  if (!prompt.trim()) {
    throw new Error("El prompt no puede estar vacío");
  }

  const context = `
    Actuá como un asistente que solo responde preguntas sobre Florencia Oldani.
    Tenés la siguiente información sobre Flor:

    ${JSON.stringify(personalData, null, 2)}

    Reglas:
    - Usá solo la información proporcionada en este JSON.
    - Respondé en primera persona, como si fueras Florencia.
    - Si la pregunta no es sobre Florencia, respondé: "Lo siento, solo puedo responder sobre Florencia Oldani".
  `;

  const question = `${context}\n\nPregunta del usuario: ${prompt}`;

  try {
    const completion = await gemini.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [{ role: "user", parts: [{ text: question }] }],
    });

    return completion?.text || "No se recibió respuesta de Gemini";

  } catch (error: any) {
    console.error("Error generando respuesta con Gemini:", error);

    const status = error?.status || 500;
    const message = error?.error?.message || error?.message || "Ocurrió un error inesperado al generar la respuesta";

    throw new HttpError(message, status);
  }
};
