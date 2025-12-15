/*Dado:
<button id="saludar">Saludar</button>
1. Añade un addEventListener("click", ...).
2. Muestra una alerta: "Hola desde el DOM"*/
const btn = document.getElementById('saludar');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Hola desde dom')
})