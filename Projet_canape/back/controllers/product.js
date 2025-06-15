import { Product } from '../models/product.js';
import pkg from 'uuid';
const { v4: uuid } = pkg;

// GET: Un seul produit par ID
export const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).render('error', {
        message: 'Produit introuvable !',
      });
    }

    const host = `${req.protocol}://${req.get('host')}`;
    const mappedProduct = {
      ...product.dataValues,
      imageUrl: `${host}/images/${product.imageUrl}`,
    };

    res.render('product', { product: mappedProduct });
  } catch (error) {
    console.error('Erreur lors de la récupération du produit :', error);
    res.status(500).render('error', {
      message: 'Erreur serveur lors de la récupération du produit.',
    });
  }
};

// POST: Commande de produits
export const orderProducts = async (req, res) => {
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
    return res.status(400).json({ error: 'Requête invalide' });
  }

  try {
    // Récupération des produits en base
    const foundProducts = await Promise.all(
      products.map((id) => Product.findByPk(id))
    );

    // Vérifie qu'ils existent tous
    if (foundProducts.some((p) => !p)) {
      return res.status(404).json({
        error: 'Un ou plusieurs produits sont introuvables.',
      });
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
    console.error('Erreur lors du traitement de la commande :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};
