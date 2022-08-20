// URL de l'api + recuperation de l'id
let url = new URL(window.location.href)
let idProduit = url.searchParams.get('id')
let urlApi = 'http://localhost:3000/api/products/'+ idProduit
let option = document.querySelector('option')

const imgKanap = document.getElementById('img-kanap')
const title = document.getElementById('title')
const price = document.getElementById('price')
const description = document.getElementById('description')
const colors = document.getElementById('colors')
const boutons = document.getElementById('addToCart')

fetch(urlApi).then((Response) =>
    Response.json().then((data) => {
        console.log(data);

        let prod = data;

        imgKanap.insertAdjacentHTML('beforeend',
        `<img src="${prod.imageUrl}" alt="${prod.altTxt}">`)
        title.insertAdjacentHTML("beforeend",
            `<h1 class= "item__content h1">${prod.name}</h1>`);
        price.insertAdjacentHTML("beforeend", 
            `<span id="price"> ${prod.price} </span>`);
        description.insertAdjacentHTML("beforeend", 
            `<p id="description"> ${prod.description} </p>`)

            prod.colors.forEach( function(val,idx){
                colors.insertAdjacentHTML("beforeend",
            `<option value="${idx}">${val}</option>`)})

            boutons.addEventListener('click', addToCart)
            function addToCart(){
                boutons.insertAdjacentHTML('beforeend',
                `<button id="addToCart">Ajouter au panier ${prod._id}</button>`
                )}
        })
)
