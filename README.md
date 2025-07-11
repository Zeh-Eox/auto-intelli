# 🤖 AutoIntelli

**AutoIntelli** est une application de chatbot moderne et intelligente qui exploite la puissance de l'API **Gemini de Google AI** pour fournir des réponses contextuelles et pertinentes aux questions des utilisateurs.

L'application offre une expérience utilisateur fluide avec une interface développée en **React**, une gestion complète de l'historique des conversations, et un système d'authentification sécurisé via **Firebase**.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18+-61DAFB.svg)

---

## ✨ Fonctionnalités

### 🔐 Authentification & Sécurité
- Connexion sécurisée par email/mot de passe via Firebase
- Gestion des sessions utilisateur
- Protection des routes privées

### 💬 Chat Intelligent
- Intégration complète avec l'API Gemini de Google AI
- Réponses contextuelles et personnalisées
- Support des conversations multi-tours

### 📚 Gestion des Données
- Historique des messages persisté côté client
- Sauvegarde automatique des conversations
- Recherche dans l'historique

### 🎨 Interface Utilisateur
- Design moderne et responsive (mobile/desktop)
- Animations fluides avec Framer Motion
- Mode sombre/clair (à venir)
- Notifications en temps réel

### 🛡️ Robustesse
- Gestion avancée des erreurs
- États de chargement dynamiques
- Retry automatique en cas d'échec

---

## 🛠️ Stack Technique

### Frontend
- **[React](https://reactjs.org/)** - Librairie UI moderne
- **[Framer Motion](https://www.framer.com/motion/)** - Animations fluides
- **[Lucide React](https://lucide.dev/)** - Icônes élégantes
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Notifications

### Backend & Services
- **[Firebase Authentication](https://firebase.google.com/)** - Authentification
- **[Gemini API](https://ai.google.dev/)** - Intelligence artificielle
- **[Axios](https://axios-http.com/)** - Client HTTP

### Outils de Développement
- **[Vite](https://vitejs.dev/)** - Build tool rapide
- **[pnpm](https://pnpm.io/)** - Gestionnaire de paquets

---

## 🚀 Installation

### Prérequis
- Node.js 16+ installé
- pnpm
- Compte Firebase
- Clé API Gemini

### Étapes d'installation

1. **Cloner le repository**
   ```bash
   git clone git@github.com:Zeh-Eox/auto-intelli.git
   cd auto-intelli

Installer les dépendances
bashpnpm install

Configuration de l'environnement
Créer un fichier .env à la racine du projet :
env# API Configuration

## Gemini AI Configuration
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent

## Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

Lancer le serveur de développement
bashpnpm run dev

Accéder à l'application
Ouvrir http://localhost:5173 dans votre navigateur.


## 📖 Guide d'utilisation
### Première connexion

Créer un compte avec votre email
Confirmer votre email (si requis)
Vous connecter à l'application

### Utilisation du chatbot

Taper votre question dans le champ de saisie
Appuyer sur Entrée ou cliquer sur le bouton d'envoi
Attendre la réponse générée par Gemini AI
Continuer la conversation de manière naturelle

### Gestion de l'historique

Toutes vos conversations sont automatiquement sauvegardées
Accédez à l'historique via le menu latéral
Recherchez dans vos conversations passées

## 🤝 Contribution
Les contributions sont les bienvenues ! Voici comment procéder :

Fork le projet
Créer une branche pour votre fonctionnalité (git checkout -b feature/nouvelle-fonctionnalite)
Commit vos changements (git commit -m 'Ajout d'une nouvelle fonctionnalité')
Push vers la branche (git push origin feature/nouvelle-fonctionnalite)
Ouvrir une Pull Request

## Standards de code

Utiliser ESLint et Prettier
Écrire des tests pour les nouvelles fonctionnalités
Documenter les changements significatifs


## 🐛 Signaler un bug
Si vous rencontrez un problème, veuillez :

Vérifier que le bug n'a pas déjà été signalé
Créer une issue avec :

Description détaillée du problème
Étapes pour reproduire
Captures d'écran si applicable
Informations sur votre environnement




## 🔧 Scripts disponibles
bash# Développement
pnpm run dev          # Lancer le serveur de développement

### Build
pnpm run build        # Construire pour la production
pnpm run preview      # Prévisualiser le build

### Linting
pnpm run lint         # Vérifier le code
pnpm run lint:fix     # Corriger automatiquement

### Tests
pnpm run test         # Lancer les tests
pnpm run test:watch   # Tests en mode watch


## 📄 Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 👥 Équipe

Zeh-Eox - Développeur principal


## 🙏 Remerciements

Google AI pour l'API Gemini
Firebase pour l'infrastructure
La communauté React pour les outils exceptionnels


<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/Zeh-Eox">Zeh-Eox</a></p>
  <p>⭐ N'hésitez pas à laisser une étoile si ce projet vous a été utile !</p>
</div>