/*1. Selecciona todos los .item.
2. Recorre la lista con un for...of.
3. Cambia todos los textos a:
o "Elemento 1", "Elemento 2", "Elemento 3"
No puedes modificar el HTML.*/
const lista = document.querySelectorAll(".item");
let contador = 1;
for (let listaElement of lista) {
    console.log(listaElement.textContent);
    listaElement.innerText = `Elemento ${contador}`;
    contador++;
}
