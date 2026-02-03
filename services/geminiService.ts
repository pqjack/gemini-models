
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const askAboutModels = async (prompt: string, history: { role: string; text: string }[] = []) => {
  const ai = getAIClient();
  
  // Using Gemini 3 Flash for quick assistant responses
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are an expert on Google's Gemini AI models. 
      Your goal is to explain the differences between Gemini 3, Gemini 2.5, and specialized models like Veo and Imagen.
      Be concise, technical but accessible, and always highlight which model is best for a specific user need.
      The current context is a "Gemini Model Explorer" web app.`,
    },
  });

  // Since we use the chat interface
  // sendMessage takes { message: string }
  const response = await chat.sendMessage({ message: prompt });
  return response.text || "Sorry, I couldn't process that request.";
};

export const getModelComparisonData = async () => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: 'Generate a JSON array comparing performance metrics (Reasoning, Speed, Multimodality, Coding) for Gemini 3 Pro, Gemini 3 Flash, and Gemini 2.5 Flash. Scores should be 1-100.',
    config: {
      responseMimeType: 'application/json'
    }
  });
  
  try {
    return JSON.parse(response.text || '[]');
  } catch (e) {
    return [];
  }
};
