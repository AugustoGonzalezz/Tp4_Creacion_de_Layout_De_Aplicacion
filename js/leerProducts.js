let resto = document.querySelector(".productos");

fetch("json/products.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < 9; i++) {

            // almaceno en la variable restaurante el valor de i del FOR
            let restaurante = data[i];

            let cartaRestaurante = document.createElement("a");
            cartaRestaurante.classList.add("resto");
            cartaRestaurante.setAttribute("href", "resto.html")
            cartaRestaurante.id = restaurante.truck_id;
            cartaRestaurante.innerHTML = /*html*/ `
                    <div class="producto-carta">
                    <img src="${data[i].avatar.src}" alt="${data[i].avatar.alt}" >
                    <p class="producto-tipo">${data[i].category}</p>
                    <h2>${data[i].name}</h2>
                    <div class="menu-producto-carta">
                        <p class="precio">$${data[i].price}</p>
                        <button onclick="window.location = ('producto.html')" class="add-btn">+</button>
                    </div>
                </div>`;

            cartaRestaurante.addEventListener("click", function () {
                let idRestauranteSeleccionado = restaurante.truck_id;
                //almaceno en CACHÉ la variable indiceCache el valor de idRestauranteSeleccionado
                localStorage.setItem("indiceCache", idRestauranteSeleccionado);
                console.log(idRestauranteSeleccionado);
            });

            resto.appendChild(cartaRestaurante);
        }
    });

// obtengo desde la caché el valor almacenado en indiceCache
console.log("con localstorage " + localStorage.getItem("indiceCache"));
let k = localStorage.getItem("indiceCache");
