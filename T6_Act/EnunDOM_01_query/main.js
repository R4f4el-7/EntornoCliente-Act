/*1. Obtén desde JavaScript el elemento <p> con querySelector.
2. Muestra su texto en la consola.
3. Cambia el texto a: "Mensaje actualizado".*/
const texto = document.querySelector('.msg');
console.log(texto.innerText);
texto.innerText = "Mensaje Actualizado";
console.log(texto.innerText);