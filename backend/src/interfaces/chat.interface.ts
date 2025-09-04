
export interface IAService {
  generateResponse(userMessage: string, context?: string): Promise<string>;
}
