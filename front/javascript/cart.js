//Déclaration des variables
let urlApi = 'http://localhost:3000/api/products';
let affichageCart = document.getElementById('cart__items');
let divImage = document.querySelector('div.cart__item__img');
let totalQuantity = document.getElementById('totalQuantity');
let totalPrice = document.getElementById('totalPrice');

// Déclaration des constantes
const cart = JSON.parse(window.localStorage.getItem('cart'));

for (let i = 0; i < cart.length; i++) {
  cart[i];

  let product = cart[i].product;

  affichageCart.classList.add('cart__item');
  affichageCart.insertAdjacentHTML(
    'beforeend',

    `   <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
            <div class="cart__item__img">
                <img class= "cart__item__img" src = "${product.imageUrl}" alt="${product.altTxt}">
            </div>
             <div class="cart__item__content">
                 <div class="cart__item__content__description">
                     <h2>${product.name}</h2>
                     <p> Couleur : ${cart[i].color}</p>
                     <p>${product.price} €</p>
                 </div>

                <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                        <p>Qté :</p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cart[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                        <p id="deleteObject" class="deleteItem">Supprimer</p>
                    </div>
                </div>
            </div>
        </article>`
  );

  let deleteObject = document.getElementById('deleteObject');
  deleteObject.addEventListener('click', function () {
    localStorage.removeItem('cart');
    location.reload('cart');
  });

  /*  cart.forEach(function () {
    cart[i];
  });

  cart.forEach(function () {
    cart[i].product.price
  })

  for (const {} in cart[i]) {
    totalQuantity
  }*/
}
