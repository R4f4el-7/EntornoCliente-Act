/*
* 1. El panel se vuelva oscuro (fondo negro, texto blanco).
2. Si el panel ya es oscuro, vuelve al tema claro.
3. Usa clases CSS, no style.*.*/
const boton = document.querySelector('#themeBtn')
const panel = document.querySelector('#panel');

boton.addEventListener('click', (e) => {
    panel.classList.toggle('dark');
})