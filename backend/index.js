import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ error: 'Prompt manquant.' });

  try {
    const response = await axios.post(
      process.env.GEMINI_API_URL || 'https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-flash:generateContent',
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      {
        params: { key: process.env.GEMINI_API_KEY },
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      }
    );

    const text = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    res.json({ reply: text || 'Pas de réponse générée.' });
  } catch (error) {
    console.error('Erreur Gemini :', error.response?.data || error.message);
    res.status(500).json({ error: 'Erreur lors de la génération de la réponse.' });
  }
});

app.listen(PORT, () => {
  console.log(`API Gemini en ligne sur http://localhost:${PORT}`);
});
