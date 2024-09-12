const mascaraClass = document.querySelectorAll(".mask");
const shampooClass = document.querySelectorAll(".shampoo");
const conditionerClass = document.querySelectorAll(".conditioner");

const todos = document.querySelector("#todos");
const shampoo = document.querySelector("#shampoo");
const mascaras = document.querySelector("#mascaras");
const cremanjuagues = document.querySelector("#cremanjuagues");

function filterProducts(category) {
    const allProducts = document.querySelectorAll(".resto");

    allProducts.forEach(product => {
        if (category === 'todos' || product.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

todos.addEventListener("click", () => {
    todos.classList.add('active');
    shampoo.classList.remove('active');
    mascaras.classList.remove('active');
    cremanjuagues.classList.remove('active');

    filterProducts('todos');
});

shampoo.addEventListener("click", () => {
    todos.classList.remove('active');
    shampoo.classList.add('active');
    mascaras.classList.remove('active');
    cremanjuagues.classList.remove('active');

    filterProducts('shampoo');
});

mascaras.addEventListener("click", () => {
    todos.classList.remove('active');
    shampoo.classList.remove('active');
    mascaras.classList.add('active');
    cremanjuagues.classList.remove('active');

    filterProducts('mask');
});

cremanjuagues.addEventListener("click", () => {
    todos.classList.remove('active');
    shampoo.classList.remove('active');
    mascaras.classList.remove('active');
    cremanjuagues.classList.add('active');

    filterProducts('conditioner');
});

// Función para alternar la visibilidad de la barra de búsqueda.
function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.style.display = (searchBar.style.display === 'none' || searchBar.style.display === '') ? 'block' : 'none';
}
