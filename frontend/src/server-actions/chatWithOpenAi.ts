"use server";
import { http } from "@/lib/httpClient";

interface AskAIResult {
  code: number;
  message?: string | null;
  data?: string | null
}

export async function askAI(question: string) {

  try{

    const result = await http<AskAIResult>("/chatai", {
      method: "POST",
      body: JSON.stringify({ prompt: question }),
    });
    
    if (!result || (result.code && result.code !== 200)) {
      return {
        data: null,
        error: "Error al consultar el servidor",
        code: result.code ?? 400,
      };
    }
    return {
      data: result.data,
      error: null,
      code: result.code,
    };
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }catch(error){
    return {
      data: null,
      error: "Intente de nuevo más tarde",
      code: 400 
    };
  }

}
