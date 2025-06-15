// /*declaration des constantes pour la page production*/
// const imgKanap = document.getElementById('img-kanap');
// const title = document.getElementById('title');
// const price = document.getElementById('price');
// const description = document.getElementById('description');
// const colors = document.getElementById('colors');
// const addToPanier = document.getElementById('addToCart');

// // URL de l'api + recuperation de l'id
// //+declaration des variables
// let url = new URL(window.location.href);
// let idProduit = url.searchParams.get('id');
// console.log('ID produit récupéré depuis l’URL :', idProduit); // <-- à ajouter
// let urlApi = 'http://localhost:3000/product/' + idProduit;
// console.log('URL API utilisée :', urlApi); // <-- à ajouter

// let option = document.querySelector('option');
// let cart = [];

// fetch(urlApi).then((Response) =>
//   Response.json().then((data) => {
//     let prod = data;

//     imgKanap.insertAdjacentHTML(
//       'beforeend',
//       `<img src="${prod.imageUrl}" alt="${prod.altTxt}">`
//     );
//     title.insertAdjacentHTML(
//       'beforeend',
//       `<h1 class= "item__content h1">${prod.name}</h1>`
//     );
//     price.insertAdjacentHTML(
//       'beforeend',
//       `<span id="price"> ${prod.price} </span>`
//     );
//     description.insertAdjacentHTML(
//       'beforeend',
//       `<p id="description"> ${prod.description} </p>`
//     );

//     prod.colors.forEach(function (color, val) {
//       colors.insertAdjacentHTML(
//         'beforeend',
//         `<option value="${val}">${color}</option>`
//       );
//     });

//     addToPanier.addEventListener('click', function () {
//       //récupération de la valeur choisi par l'utilisateur.
//       let newObject = {
//         product: prod,
//         color: document.getElementById('colors').value,
//         quantity: document.getElementById('quantity').value,
//       }; //fin de la récupération.

//       let quantity = document.getElementById('quantity').value;
//       let colories = document.getElementById('colors').value;
//       if (colories == '') {
//         alert(
//           'Veuillez choisir une couleur pour votre future canapé. Merci à vous.'
//         );
//       }
//       if (quantity == 0) {
//         alert(
//           "Veuillez choisir le nombre de canapé que vous souhaitez commandé pour votre plaisir pour pouvoir l'ajouter à  votre panier. ^^"
//         );
//       }

//       //relecture du panier pour pouvoir y ajouter tout les articles selectionné

//       //function même couleur et même id alors on fait +1
//       /*function getCart() {
//         let cart = localStorage.getItem(cart);
//         if (cart == null) {
//           return [];
//         } else {
//           return JSON.parse(cart);
//         }
//       }

//       function processLocalStorage(object) {
//         let cart = getCart();
//         let sortedArray = object
//           .from(cart)
//           .find(
//             (product) =>
//               product.id === object.id && product.colors === object.colors
//           );

//         if (cart && sortedArray) {
//           sortedArray.quantity += object.quantity;
//           localStorage.setItem(key, JSON.stringify(cart));
//         } else {
//           cart.push(object);
//           localStorage.setItem(key, JSON.stringify(cart));
//         }
//       }
//       // fin de la relecture*/
//       /*let cartread = localStorage.getItem('cart')
//       if (cartread != null) {
//         cart.push(cartread)
//       }
//       console.log(cartread);*/
//       cart.push(newObject);
//       //cart=null
//       window.localStorage.setItem('cart', JSON.stringify(cart));
//     });

//     //changement de la couleur du texte en vert
//     addToPanier.addEventListener('click', (event) => {
//       event.target.style.color = 'lightgreen';
//     });
//   })
// );
