/*declaration des constantes pour la page production*/
const imgKanap = document.getElementById('img-kanap');
const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
const colors = document.getElementById('colors');
const addToPanier = document.getElementById('addToCart');

// URL de l'api + recuperation de l'id
//+declaration des variables
let url = new URL(window.location.href);
let idProduit = url.searchParams.get('id');
let urlApi = 'http://localhost:3000/api/products/' + idProduit;
let option = document.querySelector('option');
let cart = [];

fetch(urlApi).then((Response) =>
  Response.json().then((data) => {
    let prod = data;

    imgKanap.insertAdjacentHTML(
      'beforeend',
      `<img src="${prod.imageUrl}" alt="${prod.altTxt}">`
    );
    title.insertAdjacentHTML(
      'beforeend',
      `<h1 class= "item__content h1">${prod.name}</h1>`
    );
    price.insertAdjacentHTML(
      'beforeend',
      `<span id="price"> ${prod.price} </span>`
    );
    description.insertAdjacentHTML(
      'beforeend',
      `<p id="description"> ${prod.description} </p>`
    );

    prod.colors.forEach(function (color, val) {
      colors.insertAdjacentHTML(
        'beforeend',
        `<option value="${val}">${color}</option>`
      );
    });

    addToPanier.addEventListener('click', function () {
      //récupération de la valeur choisi par l'utilisateur.
      let newObject = {
        product: prod,
        color: document.getElementById('colors').value,
        quantity: document.getElementById('quantity').value,
      }; //fin de la récupération.

      // Message d'erreur champs non renseigner
      let quantity = document.getElementById('quantity').value;
      let colories = document.getElementById('colors').value;
      if (colories == '') {
        alert(
          'Veuillez choisir une couleur pour votre future canapé. Merci à vous.'
        );
      }
      if (quantity == 0) {
        alert(
          "Veuillez choisir le nombre de canapé que vous souhaitez commandé pour votre plaisir pour pouvoir l'ajouter à  votre panier. ^^"
        );
      }

      //function même couleur et même id alors on fait +1
      function addToCart() {
        let cart = localStorage.getItem();
        if (cart == null) {
          return [];
        } else {
          return JSON.parse(cart);
        }
        let foundProduct = cart
          .from()
          .find(
            (prod) => prod.id === object.id && prod.colors === object.colors
          );
        if (cart && foundProduct) {
          foundProduct.quantity += object.quantity;
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          cart.push(newObject);
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      } // fin de la relecture*/
    });
    //changement de la couleur du texte en vert
    addToPanier.addEventListener('click', (event) => {
      event.target.style.color = 'lightgreen';
    });
  })
);
