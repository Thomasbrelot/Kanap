// URL de l'api + recuperation de l'id
//+declaration des variables
let url = new URL(window.location.href);
let idProduit = url.searchParams.get('id');
let urlApi = 'http://localhost:3000/api/products/' + idProduit;
let option = document.querySelector('option');
let cart = [];

/*declaration des constantes pour la page production*/
const imgKanap = document.getElementById('img-kanap');
const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
const colors = document.getElementById('colors');
const addToPanier = document.getElementById('addToCart');

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

    prod.colors.forEach(function (idx, color, val) {
      colors.insertAdjacentHTML(
        'beforeend',
        `<option value="${val}">${color}</option>`
      );
    });

    addToPanier.addEventListener('click', function () {
      let newArray = {
        product: prod,
        color: document.getElementById('colors').value,
        quantity: document.getElementById('quantity').value,
      };
      cart.push(newArray);

      window.localStorage.setItem('cart', JSON.stringify(cart));
    });
    addToPanier.addEventListener('click', (event) => {
      event.target.style.color = 'lightgreen';
    });
  })
);
