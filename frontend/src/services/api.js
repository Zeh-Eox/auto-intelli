export const sendPromptToAPI = async (userPrompt) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: userPrompt }),
    });

    const data = await res.json();

    if (data.reply) {
      return data.reply;
    } else {
      console.error("Erreur de réponse :", data.error);
      return "Erreur lors de la génération de la réponse.";
    }
  } catch (error) {
    console.error("Erreur de requête :", error);
    return "Impossible de contacter le serveur.";
  }
};
