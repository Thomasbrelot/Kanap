import { Product } from '../models/product.js';
import pkg from 'uuid';
const { v4: uuid } = pkg;

// GET: Un seul produit par ID
export const getOneProduct = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      // Crée une erreur 404 et la passe au middleware d’erreur
      const error = new Error('Produit introuvable !');
      error.status = 404;
      return next(error);
    }

    const host = `${req.protocol}://${req.get('host')}`;
    const mappedProduct = {
      ...product.dataValues,
      imageUrl: `${host}/images/${product.imageUrl}`,
    };

    res.render('product', { product: mappedProduct });
  } catch (error) {
    // Passe toute autre erreur au middleware d’erreur
    next(error);
  }
};

// POST: Commande de produits
export const orderProducts = async (req, res, next) => {
  const { contact, products } = req.body;

  // Vérification des champs obligatoires
  if (
    !contact ||
    !contact.firstName ||
    !contact.lastName ||
    !contact.address ||
    !contact.city ||
    !contact.email ||
    !Array.isArray(products) ||
    products.length === 0
  ) {
    const error = new Error('Requête invalide');
    error.status = 400;
    return next(error);
  }

  try {
    // Récupération des produits en base
    const foundProducts = await Promise.all(
      products.map((id) => Product.findByPk(id))
    );

    // Vérifie qu'ils existent tous
    if (foundProducts.some((p) => !p)) {
      const error = new Error('Un ou plusieurs produits sont introuvables.');
      error.status = 404;
      return next(error);
    }

    const host = `${req.protocol}://${req.get('host')}`;
    const mappedProducts = foundProducts.map((p) => ({
      ...p.dataValues,
      imageUrl: `${host}/images/${p.imageUrl}`,
    }));

    const orderId = uuid();

    // 👉 Ici tu peux sauvegarder la commande en base si besoin

    res.status(201).json({
      contact,
      products: mappedProducts,
      orderId,
    });
  } catch (error) {
    next(error);
  }
};
