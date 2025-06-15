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
          console.log(cart)
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

  //function même couleur et même id alors on fait +1
  function getCart() {
    let cart = localStorage.getItem(product);
    if (cart == null) {
      return [];
    } else {
      return JSON.parse(cart);
    }
  }

  function processLocalStorage(object) {
    let cart = getCart();
    let sortedArray = object.from(cart).find(
      (product) => product.id === object.id && product.colors === object.colors
    );

    if (cart && sortedArray) {
      sortedArray.quantity += object.quantity;
      localStorage.setItem(key, JSON.stringify(cart));
    } else {
      cart.push(object);
      localStorage.setItem(key, JSON.stringify(cart));
    }
  }

  // boutton de suppression pour supprimer un article
  let deleteObject = document.getElementById('deleteObject');
  deleteObject.addEventListener('click', function () {
    localStorage.removeItem('cart');
    location.reload('cart');
  });


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
