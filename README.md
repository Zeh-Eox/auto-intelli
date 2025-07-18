# 🤖 Chatbot IA Intelligent

> Un chatbot moderne et sécurisé avec React, Firebase et l'API Gemini de Google


## 📖 À propos

Ce projet présente un chatbot intelligent avec une interface utilisateur moderne construite avec React, une authentification sécurisée via Firebase, et une API backend Node.js qui communique avec l'API Gemini de Google pour fournir des réponses intelligentes.

### ✨ Caractéristiques principales

- 🔐 **Authentification sécurisée** - Système de connexion/inscription avec Firebase Auth
- 💬 **Interface conversationnelle** - Design moderne et responsive avec TailwindCSS
- 🧠 **IA intégrée** - Powered by Google Gemini AI pour des réponses intelligentes
- 🛡️ **Sécurité renforcée** - Clé API protégée côté serveur
- 📱 **Responsive** - Fonctionne parfaitement sur desktop et mobile
- 🔔 **Notifications** - Retours utilisateur avec React Toastify

## 🏗️ Architecture

```
mon-chatbot/
├── 📁 frontend/          # Application React
│   ├── 📁 src/
│   │   ├── 📁 components/    # Composants React
│   │   ├── 📁 services/      # Services Firebase
│   ├── 📄 .env               # Variables d'environnement
│   └── 📄 package.json
├── 📁 backend/               # API Node.js
│   ├── 📄 index.js           # Serveur Express
│   ├── 📄 .env               # Variables d'environnement
│   └── 📄 package.json
├── 📄 .gitignore
└── 📄 README.md
```

## 🚀 Installation rapide

### Prérequis

- Node.js 18.0+ et pnpm
- Compte Firebase (gratuit)
- Clé API Google Gemini

### 1. Cloner le projet

```bash
git clone https://github.com/Zeh-Eox/auto-intelli.git
cd mon-chatbot
```

### 2. Configuration du Frontend

```bash
cd frontend
pnpm install
```

Créez un fichier `.env` dans le dossier `frontend/` :

```env
VITE_FIREBASE_API_KEY=votre_api_key_firebase
VITE_FIREBASE_AUTH_DOMAIN=votre_projet.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=votre_projet_id
VITE_FIREBASE_STORAGE_BUCKET=votre_projet.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
VITE_API_BASE_URL=http://localhost:3000
```

### 3. Configuration du Backend

```bash
cd ../backend
pnpm install
```

Créez un fichier `.env` dans le dossier `backend/` :

```env
GEMINI_API_KEY=votre_clé_google_gemini
PORT=3000
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

### 4. Démarrage de l'application

**Terminal 1 - Backend :**
```bash
cd backend
node index.js
```

**Terminal 2 - Frontend :**
```bash
cd frontend
pnpm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 🔧 Configuration Firebase

1. Créez un projet sur [Firebase Console](https://console.firebase.google.com/)
2. Activez l'authentification par email/mot de passe
3. Récupérez les clés de configuration dans les paramètres du projet
4. Ajoutez votre domaine local dans les domaines autorisés

## 🔑 Obtenir une clé API Gemini

1. Visitez [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Créez une nouvelle clé API
3. Copiez la clé dans votre fichier `.env` backend

## 📦 Technologies utilisées

### Frontend
- **React 18** - Bibliothèque UI
- **Vite** - Bundler moderne et rapide
- **TailwindCSS** - Framework CSS utilitaire
- **Firebase Auth** - Authentification
- **React Toastify** - Notifications
- **Lucide React** - Icônes modernes

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Google Gemini AI** - API d'intelligence artificielle
- **CORS** - Gestion des requêtes cross-origin
- **dotenv** - Variables d'environnement

## 🛡️ Sécurité

- ✅ Clé API Gemini sécurisée côté serveur
- ✅ Authentification Firebase
- ✅ Validation des données côté client et serveur
- ✅ Variables d'environnement pour les informations sensibles
- ✅ CORS configuré pour les origines autorisées

## 🚀 Déploiement (A venir...)

### Frontend (Vercel)
```bash
npm run build
# Déployez le dossier dist/ sur Vercel
```

### Backend (Railway/Heroku)
```bash
# Configurez les variables d'environnement sur votre plateforme
# Déployez via Git ou CLI
```

## 🔮 Roadmap

- [ ] 👥 Système de rôles utilisateur (admin/user)
- [ ] 📝 Historique des conversations
- [ ] 🎤 Intégration vocale (speech-to-text)
- [ ] 🔊 Synthèse vocale (text-to-speech)
- [ ] 📊 Dashboard administrateur
- [ ] 🌍 Support multilingue
- [ ] 📱 Application mobile React Native
- [ ] 🔄 Synchronisation en temps réel
- [ ] 📈 Analytics et métriques
- [ ] 🎨 Thèmes personnalisables

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Arnold Jonas CONVOLBO (Luffy)**

- 🌍 Burkina Faso
- 💼 Développeur Full-Stack passionné
- 🔗 [GitHub](https://github.com/Zeh-Eox)
- 📧 Email: arnoldcnv99@gmail.com

---

## 🙏 Remerciements

- [Google Gemini AI](https://ai.google.dev/) pour l'API d'intelligence artificielle
- [Firebase](https://firebase.google.com/) pour l'authentification
- [React](https://reactjs.org/) pour le framework frontend
- [TailwindCSS](https://tailwindcss.com/) pour le styling

---

<div align="center">
  <p>Développé avec ❤️ par Arnold Jonas CONVOLBO</p>
  <p>⭐ N'hésitez pas à donner une étoile si ce projet vous a aidé !</p>
</div>