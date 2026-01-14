/*setAttribute("data-id", "23") Crea o modifica un atributo en un elemento.*/
//NOTA:data-* (atributos personalizados) Se usan para guardar información
/*getAttribute("href") Lee el valor de un atributo.*/
/*removeAttribute("disabled") Elimina un atributo del elemento.*/
const link = document.querySelector("a");
const btn = document.querySelector("button");

console.log(link);
if (link) {
    const url = link.getAttribute("href");
    link.setAttribute("data-id", "23");
    console.log(url);
}
console.log(link);
if (btn) {
    btn.removeAttribute("disabled");
}
