import { Sequelize } from 'sequelize';
import configFile from '../config/config.js';
import { initProductModel } from './product.js';

// Détermine l'environnement (par défaut : development)
const env = process.env.NODE_ENV || 'development';
const config = configFile[env];

// Crée une instance Sequelize avec les variables d'environnement
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

// Initialise les modèles
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Product = initProductModel(sequelize);

export default db;
