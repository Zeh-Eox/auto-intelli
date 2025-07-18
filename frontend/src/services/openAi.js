import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL || "https://api.openai.com/v1/chat/completions"

export const askOpenApi = async (prompt) => {
  try {
    const response = await axios.post(
      API_URL, 
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      }
    )

    return response.data.choices[0].message.content;
  } catch (err)
  {
    console.error("Erreur OpenAI:", err);
    return "Désolé, une erreur est survenue.";
  }
}