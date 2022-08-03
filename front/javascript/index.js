// avoir le tableau des informations du site par l'api
let urlApi = 'http://localhost:3000/api/products'

const affichage = document.getElementById(`items`)

fetch(urlApi).then((Response) =>
    Response.json().then((data) => {
        console.log(data);
        data.forEach((urlApi) => {
            affichage.insertAdjacentHTML("afterbegin", `<section class="items" id="items">${}</section>`);
            affichage.classList.add("items")
        });
    })
)
