/* Déclaration des variables
let urlApi = 'http://localhost:3000/api/products';
let affichageCart = document.getElementById(`cart__items`);

 Déclaration des constantes
const cart = JSON.parse(window.localStorage.getItem("cart"));

fetch(urlApi).then((Response) =>
    Response.json().then((data) => {
        let prod = data;

        /*function afficher() {
            let recoveryColor = document.getElementById('colors').value;
        }
        affichageCart.insertAdjacentHTML("beforeend", 
        `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="${prod.imageUrl}" alt="${prod.altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2> ${prod.name} </h2>
                    <p> recoveryColor </p>
                    <p> ${prod.price} </p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>
        `)
    })
)*/


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

    let product = cart[i].product

    affichageCart.classList.add("cart__item")
    affichageCart.insertAdjacentHTML("beforeend",

    `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
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
                <p id="delete" class="deleteItem">Supprimer</p>
            </div>
        </div>
    </div>
  </article>`)
}


