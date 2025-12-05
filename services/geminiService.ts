import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Note: process.env.API_KEY must be set in the build environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTeaserResponse = async (
  systemInstruction: string,
  userPrompt: string
): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        // maxOutputTokens removed to prevent empty responses when thinkingBudget is not set.
        temperature: 0.7,
      },
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while processing your request. Please try again later.";
  }
};