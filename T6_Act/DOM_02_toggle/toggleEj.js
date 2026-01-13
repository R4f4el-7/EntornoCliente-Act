/*Si la clase existe, la quita
 Si no existe, la agrega*/
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const caja1 = document.getElementById("caja1");
const caja2 = document.getElementById("caja2");
const frase_caja2 = document.createElement("h3");

let contador = 0;

btn1.addEventListener("click", () => {
    caja1.classList.toggle("activo");
});
btn2.addEventListener("click", () => {
    caja1.toggleAttribute("hidden");
})
/*Al hacer clic en caja1 aparezca elementos en caja2*/
caja1.addEventListener("click", () => {
    contador += 1;
    frase_caja2.textContent = `Este es el click numero ${contador}`;
    caja2.appendChild(frase_caja2);
})
/*RECUERDA:
* CSS / animaciones → classList.toggle()
Atributos HTML → toggleAttribute()*/
