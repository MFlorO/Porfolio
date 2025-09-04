"use server";
import { NEXT_PUBLIC_API_BASE_URL_BACKEND } from "../../env";

export async function askAI(question: string){

  const res = await fetch(`${NEXT_PUBLIC_API_BASE_URL_BACKEND}/chatai`, { 
    method: "POST", 
    headers: { "Content-Type": "application/json" }, 
    body: JSON.stringify({ prompt: question }),
    cache: "no-store"
  }); 

  if (!res || !res.ok) {
    return {
      data: null,
      error: "Error al consultar el backend",
      code: 400,
    };
  }

  const result = await res.json(); 

  if (!result || result?.code && result.code !== 200) {
    return {
      data: null,
      error: result.message || "Error al consultar el backend",
      code: result.code,
    };
  }

  return {
    data: result,
    error: null,
    code: result.code,
  };
}
