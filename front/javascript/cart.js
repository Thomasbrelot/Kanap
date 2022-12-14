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
  let color = cart[i].color;

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
                     <p> Couleur : ${product.colors[color]}</p>
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

  // boutton de suppression pour supprimer l'article
  let deleteObject = document.getElementById('deleteObject');
  deleteObject.addEventListener('click', function () {
    localStorage.removeItem('cart');
    location.reload('cart');
  });

  function verification() {
    if (document.getElementById('firstName') == '') {
      alert('Veuillez entre votre prénom pour continuer!');
      return false;
    }
  }

  /*modification "change" pour le nombre d'article*/
  /* addToPanier.addEventListener('change', function () {

  });*/

  this.getPrixPanier = function () {
    var total = 0;
    for (var i = 0; i < this.liste.length; i++)
      total += this.liste[i].getPrixLigne();
    return total;
  };
}
