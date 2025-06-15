import { Product } from '../models/product.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    // On envoie les produits à la vue 'products.ejs'
    res.render('products', { products });
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

