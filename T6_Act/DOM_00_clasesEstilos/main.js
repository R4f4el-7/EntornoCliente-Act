const caja = document.querySelector('#caja');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');

const titulo = document.createElement('h2');

titulo.textContent = "Titulo creado con createElement";
caja.appendChild(titulo);

btn1.addEventListener('click', e => {
    caja.classList.toggle('resaltado');
})
btn2.addEventListener('click', e => {
    caja.classList.add('oculto');
    caja.classList.remove('mostrar');
})
btn3.addEventListener('click', e => {
    caja.classList.remove('oculto');
    caja.classList.add('mostrar');
})
btn4.addEventListener('click', e => {
    caja.classList.toggle('oculto');
})
btn5.addEventListener('click', e => {
    caja.toggleAttribute('hidden')
})