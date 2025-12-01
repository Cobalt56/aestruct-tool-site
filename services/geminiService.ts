import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Note: process.env.API_KEY must be set in the build environment
const apiKey = process.env.API_KEY || ''; 

// Helper to ensure we don't crash if key is missing during development, 
// but practically this should be handled by environment config.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateTeaserResponse = async (
  systemInstruction: string,
  userPrompt: string
): Promise<string> => {
  if (!ai) {
    return "API Key not configured. Please ensure process.env.API_KEY is set.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        maxOutputTokens: 300, // Keep teaser responses concise
        temperature: 0.7,
      },
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while processing your request. Please try again later.";
  }
};