// let affichageCards = document.getElementById('items');
// let urlApi = 'http://localhost:3000/products'; // Note le pluriel !

// fetch(urlApi)
//   .then((response) => {
//     if (!response.ok) throw new Error('Erreur API : ' + response.status);
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((product) => {
//       affichageCards.insertAdjacentHTML(
//         'beforeend',
//         `<a href="./product.html?id=${product._id}" class="item-link">
//           <article class="item-article">
//               <img class="item-img" src="${product.imageUrl}" alt="${product.altTxt}">
//               <h3 class="item-title">${product.name}</h3>
//               <p class="item-desc">${product.description}</p>
//           </article>
//         </a>`
//       );
//     });
//   })
//   .catch((error) => {
//     affichageCards.innerHTML =
//       '<p style="color:red">Impossible de charger les produits.</p>';
//     console.error(error);
//   });
