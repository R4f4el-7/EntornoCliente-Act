/*NO alterna automáticamente Obedece al valor booleano*/
const btn = document.getElementById("btn");
const box = document.getElementById("box");

let activo = false;

btn.addEventListener("click", () => {
    activo = !activo;
    box.classList.toggle("active", activo);
});