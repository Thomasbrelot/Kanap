import db from '../models/index.js';
const { Product } = db;

export const cart = (req, res, next) => {
  try {
    res.render('cart');
  } catch (error) {
    next(error);
  }
};
