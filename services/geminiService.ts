
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Ecosystem Guide" for Vishwmitra Shrivastava (thevishwmitra).
Vishwmitra is a multifaceted creator and consultant.
If users ask where to find things, guide them based on these paths:
1. YouTube: For learning video editing, workflows, and storytelling.
2. Instagram: For daily life and behind-the-scenes content.
3. Editing Agency: For professional "done-for-you" video editing services.
4. Consultancy: To book 1-on-1 calls for workflow audits or agency growth.
5. Community: To join his Discord server for networking with other editors.

Tone: Modern, tech-forward, minimal, and helpful.
Goal: Act as a navigator for his personal ecosystem.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    // Always initialize GoogleGenAI with a named parameter for the apiKey.
    // Obtain the API key exclusively from process.env.API_KEY.
    // Create the instance inside the function to ensure the latest configuration is used.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        // Recommendation: Avoid setting maxOutputTokens unless strictly necessary to avoid truncation.
      },
    });

    // Directly access the .text property on the GenerateContentResponse object.
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The system is currently syncing. Please check the Hub section or book a call directly!";
  }
};
