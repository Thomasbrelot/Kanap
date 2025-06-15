import db from '../models/index.js';
const { Product } = db;

export const cart = (req, res) => {
  res.render('cart');
};
