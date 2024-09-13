// Selecciona los elementos necesarios
const resto = document.querySelector(".productos");
const buscador = document.getElementById("buscador");

let productosData = []; // Variable para almacenar los datos de productos

// Función para renderizar los productos
function renderizarProductos(data) {
    resto.innerHTML = ''; // Limpia el contenedor de productos
    data.forEach((producto) => {
        const cartaRestaurante = document.createElement("a");
        cartaRestaurante.classList.add("resto");
        cartaRestaurante.classList.add(`${producto.typeClass}`);
        cartaRestaurante.setAttribute("href", "resto.html");
        cartaRestaurante.id = producto.truck_id;
        cartaRestaurante.innerHTML = /*html*/ `
            <div class="producto-carta">
                <img src="${producto.avatar.src}" alt="${producto.avatar.alt}" >
                <p class="producto-tipo">${producto.category}</p>
                <h2>${producto.name}</h2>
                <div class="menu-producto-carta">
                    <p class="precio">$${producto.price}</p>
                    <button onclick="window.location = ('producto.html')" class="add-btn">+</button>
                </div>
            </div>`;
        
        cartaRestaurante.addEventListener("click", function () {
            const idRestauranteSeleccionado = producto.truck_id;
            localStorage.setItem("indiceCache", idRestauranteSeleccionado);
            console.log(idRestauranteSeleccionado);
        });

        resto.appendChild(cartaRestaurante);
    });
}

// Función para filtrar productos
function filtrarProductos(query) {
    const resultados = productosData.filter((producto) => {
        return producto.name.toLowerCase().includes(query.toLowerCase());
    });
    renderizarProductos(resultados);
}

// Evento para el campo de búsqueda
buscador.addEventListener("input", (event) => {
    const query = event.target.value;
    filtrarProductos(query);
});

// Fetch y renderizar productos
fetch("json/products.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        productosData = data; // Guarda los datos para filtrar después
        renderizarProductos(data);
    })
    .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
    });
