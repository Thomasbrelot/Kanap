//Déclaration des variables
let urlApi = 'http://localhost:3000/api/products';
let affichageCart = document.getElementById('cart__items');
let totalQuantity = document.getElementById('totalQuantity');
let totalPrice = document.getElementById('totalPrice');

// Récupération du panier depuis le localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
  affichageCart.innerHTML = '';
  let totalQte = 0;
  let totalPrix = 0;

  cart.forEach((item, i) => {
    affichageCart.insertAdjacentHTML(
      'beforeend',
      `<article class="cart__item" data-id="${item.id}" data-color="${item.color}">
        <div class="cart__item__img">
          <img src="${item.imageUrl}" alt="${item.altTxt}">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>${item.name}</h2>
            <p>Couleur : ${item.color}</p>
            <p>${item.price} €</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté :</p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quantity}" data-index="${i}">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem" data-index="${i}">Supprimer</p>
            </div>
          </div>
        </div>
      </article>`
    );
    totalQte += Number(item.quantity);
    totalPrix += item.price * item.quantity;
  });
  totalQuantity.textContent = totalQte;
  totalPrice.textContent = totalPrix;
}

displayCart();

// Suppression d'un article
affichageCart.addEventListener('click', function (e) {
  if (e.target.classList.contains('deleteItem')) {
    const index = e.target.getAttribute('data-index');
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
});

// Modification de la quantité
affichageCart.addEventListener('change', function (e) {
  if (e.target.classList.contains('itemQuantity')) {
    const index = e.target.getAttribute('data-index');
    let newQte = Number(e.target.value);
    if (newQte < 1) newQte = 1;
    if (newQte > 100) newQte = 100;
    cart[index].quantity = newQte;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
});
