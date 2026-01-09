import { GoogleGenAI } from "@google/genai";
import { GenerationRequest } from "../types";

const SYSTEM_INSTRUCTION = `
Eres RedactaRápido, un asistente de redacción experto en SEO y copywriting persuasivo.
Tu objetivo es transformar pocas palabras o ideas sueltas en textos profesionales, coherentes y listos para publicar.
Siempre responde en Español. 
Estructura bien el contenido (párrafos cortos, negritas si es necesario).
No incluyas explicaciones previas, entrega directamente el texto redactado.
Si el usuario pide un artículo extenso, asegúrate de profundizar en los detalles para alcanzar una buena longitud (hasta 2500 palabras si es necesario).
`;

export const generateText = async (request: GenerationRequest): Promise<string> => {
  try {
    // Ideally this comes from a secure backend or environment variable in a real app
    // Using strict environment variable as per instructions
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      throw new Error("API Key not found in environment variables");
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
      Actúa como un redactor experto.
      
      Tipo de contenido: ${request.type}
      Tono deseado: ${request.tone}
      
      Idea o palabras clave del usuario: "${request.topic}"
      
      Instrucciones adicionales:
      - Si es un Email, incluye asunto.
      - Si es para Redes Sociales, incluye hashtags relevantes.
      - Si es un Artículo, usa estructura H2/H3 y sé extenso si el tema lo permite.
      
      Redacta el contenido ahora:
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview', 
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Creativity balance
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 8192, // Increased limit to support ~2500+ words
      }
    });

    if (response.text) {
      return response.text;
    }
    
    return "Lo siento, no pude generar el texto en este momento. Inténtalo de nuevo.";

  } catch (error) {
    console.error("Error generating content:", error);
    return "Hubo un error al conectar con la IA. Por favor verifica tu conexión o intenta más tarde.";
  }
};