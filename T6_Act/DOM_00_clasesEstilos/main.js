const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const caja = document.querySelector('#caja');
const titulo = document.createElement('h2');

titulo.textContent = "Titulo creado con createElement";
caja.appendChild(titulo);

btn1.addEventListener('click', e => {
    caja.classList.toggle('resaltado');
})
btn2.addEventListener('click', e => {
    caja.classList.toggle('oculto');
})
btn1.addEventListener('click', e => {
    caja.classList.add('mostrar');
})

