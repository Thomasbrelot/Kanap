// URL de l'api 
let urlApi = 'http://localhost:3000/api/products'

const title = document.getElementById('title')
const price = document.getElementById('price')

fetch(urlApi).then((Response) =>
    Response.json().then((data) => {
        console.log(data);

        data.forEach(products => {
            title.insertAdjacentHTML("beforeend",
            `<h1 class= "item__content h1">${products.name}</h1>`
            
            )
            
        });
    })
)