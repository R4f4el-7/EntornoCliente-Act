/*Dado este HTML:
<div id="container"></div>
Desde JS:
1. Crea un elemento <p>.
2. Añade el texto: "Elemento añadido dinámicamente".
3. Inserta el párrafo dentro de #container.*/
const parrafo = document.createElement('p');
const caja = document.querySelector('#container');

parrafo.textContent = "Elemento añadido dinámicamente";

caja.appendChild(parrafo);