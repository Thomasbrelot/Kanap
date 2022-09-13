// avoir le tableau des informations du site par l'api
let urlApi = 'http://localhost:3000/api/products'
let affichageCards = document.getElementById(`items`)

fetch(urlApi).then((Response) =>
    Response.json().then((data) => {
        data.forEach(products => {
            affichageCards.classList.add('items');
            affichageCards.insertAdjacentHTML("beforeend",
            `<a href="./product.html?id=${products._id}" class= "items a">
            <article class= "items article">
            <img class= "article img" src = "${products.imageUrl}" alt="${products.altTxt}"> 
            <h3 class="article h3"> ${products.name} </h3>
            <p class= "article p"> ${products.description} </p>
            </article>
            </a>`
            )});
    })
)
