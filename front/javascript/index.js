// avoir le tableau des informations du site par l'api
let urlApi = 'http://localhost:3000/api/products'

let affichageCards = document.getElementById(`items`)

fetch(urlApi).then((Response) =>
    Response.json().then((data) => {
        console.log(data);
        data.forEach(products => {
            affichageCards.insertAdjacentHTML("afterbegin",`<a>
            <article>
            ${products.imageUrl}
            ${products.name}
            ${products.price}
            ${products.description}
            ${products.colors}
            </article>
            </a>`);
            affichageCards.classList.add("items");
        });
    })
)
