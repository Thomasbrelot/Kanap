import db from '../models/index.js';

const { Product } = db;

export const homePage = async (req, res) => {
  try {
    const products = await Product.findAll({ limit: 6 });
    console.log(products);

    res.render('index', { products });
  } catch (error) {
    console.error('Erreur lors de la récupération des produits :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};
