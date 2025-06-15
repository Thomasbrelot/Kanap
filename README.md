# 🛋️ Kanap – Plateforme e-commerce de canapés

Bienvenue sur **Kanap**, une application web **full-stack** permettant de consulter un catalogue de canapés, personnaliser les produits, gérer un panier et passer une commande.

## 📚 Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Scripts disponibles](#scripts-disponibles)
- [Technologies utilisées](#technologies-utilisées)
- [Bonnes pratiques](#bonnes-pratiques)
- [Auteurs](#auteurs)

---

## ✅ Fonctionnalités

- Affichage dynamique d’un catalogue de canapés
- Page produit avec sélection d’options (couleurs, quantité)
- Ajout au panier et gestion complète du panier
- Formulaire de commande avec validation
- Architecture MVC (Express + EJS)
- Composants front-end réutilisables (header, footer)

---

## 🗂 Structure du projet

```
Projet_canape/
├── back/ # Backend (Node.js, Express)
│   ├── app.js
│   ├── controllers/
│   ├── models/
│   ├── routers/
│   └── ...
├── front/ # Frontend (EJS, CSS, JavaScript)
│   ├── public/
│   │   ├── css/
│   │   ├── images/
│   │   └── javascript/
│   └── views/
│       ├── components/
│       └── ...
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

1. **Cloner le dépôt**
   ```sh
   git clone <url-du-repo>
   cd Projet_canape
   ```
2. **Installer les dépendances du back-end**
   ```sh
   cd back
   npm install
   ```
3. **Configurer le port**
   Par défaut, l’application tourne sur le port 3000. Pour modifier la configuration, crée un fichier `.env` dans le dossier `back/`.

---

## 🚀 Utilisation

1. **Lancer le serveur back**
   ```sh
   cd back
   npm run dev
   # ou
   npm start
   ```
2. **Accéder à l’application**
   - Ouvre ton navigateur sur : [http://localhost:3000](http://localhost:3000)
   - Navigue entre le catalogue, les fiches produits et le panier

---

## 🛠️ Scripts disponibles

- `npm run dev` : Lancer le serveur en mode développement (avec rechargement automatique)
- `npm start` : Lancer le serveur en mode production

---

## 🧰 Technologies utilisées

| Back-end                                      | Front-end                            |
| --------------------------------------------- | ------------------------------------ |
| Node.js, Express, EJS, Sequelize, dotenv      | HTML5, CSS3, JavaScript (ES6), EJS   |
| Middleware Express (body-parser, static, etc) | Fichiers statiques (images, CSS, JS) |
| Architecture MVC, routes, contrôleurs         | Composants EJS (header, footer, etc) |
| Variables d'environnement (.env)              | Responsive design, grid/flexbox      |
| Gestion des modèles Sequelize                 | Utilisation de partials EJS          |

---

## 📌 Bonnes pratiques

- Utilisation de composants EJS pour éviter la répétition (header, footer)
- Séparation claire du front et du back
- Fichiers `.env` et `node_modules` ignorés par git

---

## 👨‍💻 Auteurs

Projet réalisé par Brelot Thomas.
