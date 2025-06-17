import db from '../models/index.js';
const { Product } = db;

export const homePage = async (req, res, next) => {
  try {
    const products = await Product.findAll({ limit: 6 });
    res.render('index', { products });
  } catch (error) {
    next(error); // transmet l'erreur à errorHandler
  }
};
