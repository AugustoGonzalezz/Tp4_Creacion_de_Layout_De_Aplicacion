const mascaraClass = document.querySelectorAll(".mask");
const shampooClass = document.querySelectorAll(".shampoo");
const conditionerClass = document.querySelectorAll(".conditioner");

const todos = document.querySelector("#todos");
const shampoo = document.querySelector("#shampoo"); // Asegúrate de usar el selector correcto
const mascaras = document.querySelector("#mascaras"); // Asegúrate de usar el selector correcto
const cremanjuagues = document.querySelector("#cremanjuagues"); // Asegúrate de usar el selector correcto

todos.addEventListener("click", e => {
    todos.classList.add('active');
    shampoo.classList.remove('active');
    mascaras.classList.remove('active');
    cremanjuagues.classList.remove('active');

    shampooClass.forEach(elemento => {
        elemento.classList.remove('ocultar');
    });

    mascaraClass.forEach(elemento => {
        elemento.classList.remove('ocultar');
    });

    conditionerClass.forEach(elemento => {
        elemento.classList.remove('ocultar');
    });
})

shampoo.addEventListener("click", e => {
    todos.classList.remove('active');
    shampoo.classList.add('active');
    mascaras.classList.remove('active');
    cremanjuagues.classList.remove('active');

    shampooClass.forEach(elemento => {
        elemento.classList.remove('ocultar');
    });

    mascaraClass.forEach(elemento => {
        elemento.classList.add('ocultar');
    });

    conditionerClass.forEach(elemento => {
        elemento.classList.add('ocultar');
    });
})

mascaras.addEventListener("click", e => {
    todos.classList.remove('active');
    shampoo.classList.remove('active');
    mascaras.classList.add('active');
    cremanjuagues.classList.remove('active');

    shampooClass.forEach(elemento => {
        elemento.classList.add('ocultar');
    });

    mascaraClass.forEach(elemento => {
        elemento.classList.remove('ocultar');
    });

    conditionerClass.forEach(elemento => {
        elemento.classList.add('ocultar');
    });
})

cremanjuagues.addEventListener("click", e => {
    todos.classList.remove('active');
    shampoo.classList.remove('active');
    mascaras.classList.remove('active');
    cremanjuagues.classList.add('active');

    shampooClass.forEach(elemento => {
        elemento.classList.add('ocultar');
    });

    mascaraClass.forEach(elemento => {
        elemento.classList.add('ocultar');
    });

    conditionerClass.forEach(elemento => {
        elemento.classList.remove('ocultar');
    });
})

// Función para alternar la visibilidad de la barra de búsqueda.
function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block';
    } else {
        searchBar.style.display = 'none';
    }
}
