import { NEXT_PUBLIC_API_BASE_URL_BACKEND } from "../../env";

const BASE = NEXT_PUBLIC_API_BASE_URL_BACKEND ?? "http://localhost:3001";

export class HttpError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    ...init,
  });

  if (!res.ok) {
    throw new HttpError(res.status, await res.text());
  }

  return res.json() as Promise<T>;
}
