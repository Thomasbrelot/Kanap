/**
 * product.js
 * Gère l'ajout de produits au panier depuis la page produit
 * et l'affichage du panier depuis la page panier.
 */

// Récupère le panier depuis localStorage ou retourne un tableau vide
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// Sauvegarde le panier dans localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Ajoute un produit au panier
function addToCart(product) {
  const cart = getCart();
  // Recherche un produit identique (id + couleur)
  const existing = cart.find(
    (item) => item.id === product.id && item.color === product.color
  );
  if (existing) {
    existing.quantity += product.quantity;
  } else {
    cart.push(product);
  }
  saveCart(cart);
}

// Affiche le contenu du panier dans un container avec id 'cartItems'
function displayCart() {
  const cart = getCart();
  const cartContainer = document.getElementById('cartItems');

  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.textContent = 'Votre panier est vide.';
    return;
  }

  cartContainer.innerHTML = '';

  cart.forEach((item) => {
    const productEl = document.createElement('div');
    productEl.classList.add('cart-item');

    productEl.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.altTxt}" width="100" />
        <div>
          <h3>${item.name}</h3>
          <p>Couleur : ${item.color}</p>
          <p>Quantité : ${item.quantity}</p>
          <p>Prix unitaire : ${item.price} €</p>
          <p>Total : ${(item.price * item.quantity).toFixed(2)} €</p>
        </div>
      `;

    cartContainer.appendChild(productEl);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const addToCartBtn = document.getElementById('addToCart');

  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      console.log('Bouton Ajouter au panier cliqué');

      const urlParts = window.location.pathname.split('/');
      const productId = urlParts[urlParts.length - 1];
      const productName =
        document
          .querySelector('.item__content__titlePrice h1')
          ?.textContent.trim() || '';
      const productPrice =
        parseFloat(
          document.querySelector('.item__content__titlePrice span')?.textContent
        ) || 0;
      const productColor = document.getElementById('colors')?.value || null;
      const quantity =
        parseInt(document.getElementById('quantity')?.value, 10) || 1;
      const productImg = document.querySelector('.item__img img');
      const productImageUrl = productImg ? productImg.getAttribute('src') : '';
      const productAltTxt = productImg ? productImg.getAttribute('alt') : '';

      if (!productColor || productColor === '') {
        alert('Veuillez choisir une couleur.');
        return;
      }

      if (quantity < 1 || quantity > 100) {
        alert('Veuillez choisir une quantité entre 1 et 100.');
        return;
      }

      const product = {
        id: productId,
        name: productName,
        price: productPrice,
        color: productColor,
        quantity: quantity,
        imageUrl: productImageUrl,
        altTxt: productAltTxt,
      };

      addToCart(product);
      alert('Produit ajouté au panier !');
    });
  }

  // Affiche le panier si on est sur la page panier
  if (document.getElementById('cartItems')) {
    displayCart();
  }
});
