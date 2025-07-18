import axios from "axios";

const API_URL = import.meta.env.VITE_GEMINI_API_URL || "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

export const askGemini = async (prompt) => {
  try {
    const response = await axios.post(`${API_URL}?key=${API_KEY}`, 
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    return response.data.candidates[0]?.content?.parts[0]?.text || "Réponse vide.";
  } catch (error) {
    console.error("Erreur Gemini:", error);
    return "❌ Une erreur est survenue avec Gemini.";
  }
}