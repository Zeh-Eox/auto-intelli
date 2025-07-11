# 🤖 AutoIntelli

**AutoIntelli** est une application de chatbot moderne utilisant l'API **Gemini de Google AI** pour fournir des réponses intelligentes aux questions des utilisateurs.  
Elle inclut une interface intuitive développée en **React**, une gestion de l’historique des discussions, et une authentification sécurisée via **Firebase**.

---

## 🚀 Fonctionnalités

- 🔐 Authentification par email/mot de passe (Firebase)
- 💬 Chatbot interactif avec réponses générées par Gemini
- 📚 Historique des messages persisté côté client
- 🌓 UI moderne et responsive (mobile/desktop)
- 📥 Gestion des erreurs et chargement dynamique
- 🎉 Notifications avec React Toastify

---

## 🛠️ Technologies utilisées

- [React](https://reactjs.org/)
- [Firebase Authentication](https://firebase.google.com/)
- [Gemini API (Google AI)](https://ai.google.dev/)
- [Axios](https://axios-http.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## ⚙️ Installation

1. **Clone le repo**
  ```bash
   git clone git@github.com:Zeh-Eox/auto-intelli.git
   cd auto-intelli

2. **Installe les dependances**
  ```bash
   pnpm install

3. **Configure les variables d’environnement**
  VITE_API_KEY
  VITE_API_URL

  VITE_GEMINI_API_KEY
  VITE_GEMINI_API_URL

  VITE_FIREBASE_API_KEY
  VITE_FIREBASE_AUTH_DOMAIN
  VITE_FIREBASE_PROJECT_ID
  VITE_FIREBASE_STORAGE_BUCKET
  VITE_FIREBASE_MESSAGING_SENDER_ID
  VITE_FIREBASE_APP_ID

4. **Lance le serveur de développement**
  ```bash
   pnpm run dev


## 📄 Licence

Ce projet est open-source et libre de modifications.
