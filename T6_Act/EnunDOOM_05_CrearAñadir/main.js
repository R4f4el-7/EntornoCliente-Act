const parrafo = document.createElement('p');
const caja = document.querySelector('#container');

parrafo.textContent = "Elemento añadido dinámicamente";

caja.appendChild(parrafo);