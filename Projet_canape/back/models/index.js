import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';

const env = process.env.NODE_ENV || 'development';

// On construit le chemin vers le fichier config.json
const configPath = path.resolve(process.cwd(), 'config', 'config.json');

// On lit et parse le fichier JSON
const configFile = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const config = configFile[env];

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config);

import { initProductModel } from './product.js';

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Product = initProductModel(sequelize);

export default db;
