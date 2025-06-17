import { Product } from '../models/product.js';

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    // On envoie les produits à la vue 'products.ejs'
    res.render('products', { products });
  } catch (error) {
    next(error); // Passe l’erreur au middleware centralisé
  }
};
