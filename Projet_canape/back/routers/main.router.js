import { Router } from 'express';
import express from 'express';
import { homePage } from '../controllers/homePage.js';
import { cart } from '../controllers/cart.js';
import { getAllProducts } from '../controllers/products.js';
import { getOneProduct } from '../controllers/product.js';

export const route = Router();

const app = express();

// Route pour la page d'accueil
route.get('/', homePage);

// route pour la page du panier
route.get('/cart', cart);

// route pour afficher la page avec tous les canapés
route.get('/products', getAllProducts);
// route pour afficher la page d'un canapé
route.get('/product/:id', getOneProduct);
