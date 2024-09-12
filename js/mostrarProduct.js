let resto = document.querySelector(".main");

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
            <h3 class="rojo">Shampoo</h3>
            <h1>${data[i].name}</h1>
            <div class="carta">
                <div class="producto-carta">
                    <img src="https://via.placeholder.com/300" alt="Hair Strength Shampoo">
                </div>
                <div class="packs-section">
                    <h2>Ingredientes</h2>
                    <div class="packs">
                        <img src="https://via.placeholder.com/80" alt="Pack 1">
                        Pepe
                        <img src="https://via.placeholder.com/80" alt="Pack 2">
                        Pepe
                        <img src="https://via.placeholder.com/80" alt="Pack 3">
                        Pepe
                    </div>
                </div>
            </div>
            <div class="descripcion">
                <h1>Descripcion</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit excepturi consequatur assumenda eos porro. Modi magni facere, qui expedita illum recusandae sint a consequatur harum! Animi incidunt molestiae possimus iste.</p>
            </div>
            <div class="opcionesCompra">
                <div class="menuCompra">
                    <div class="precio"><p class="etiquetaPrecio">$</p><p class="precioNum">21.50</p></div>
                    <div class="cantidadCompra">
                        <button class="symbols2 restarCompra" onclick="restar()">-</button>
                        <p class="cantCompra"></p>
                        <button class="symbols2 sumarCompra" onclick="sumar()">+</button>
                    </div>
                </div>
                <button class="añadirCompra">Añadir</button>
            </div>
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
