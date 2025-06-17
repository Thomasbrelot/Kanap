import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { route } from '../routers/main.router.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Pour que __dirname fonctionne avec ES Modules (import/export)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin absolu vers le dossier front/views
const viewsPath = path.join(__dirname, '../../front/views');
const publicPath = path.join(__dirname, '../../front/public');

app.use(express.static(publicPath));
app.use(express.static('public'));

// Configuration du moteur de template
app.set('view engine', 'ejs');
app.set('views', viewsPath);

// Middleware pour parser les données JSON (utile si tu envoies des POST/PUT)
app.use(express.json());

// Utiliser les routes
app.use(route);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 App is running on http://localhost:${PORT}`);
});
