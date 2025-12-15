//createElement
const titulo = document.createElement('h1');
const nuevoParrafo = document.createElement('p'); // Creo <p>
const bttn = document.querySelector('#bttn');

titulo.textContent = "Titulo cerrado";
document.body.appendChild(titulo);

nuevoParrafo.textContent = "Hola, soy un párrafo creado con JavaScript";
document.body.appendChild(nuevoParrafo); // Lo agrego a la página

bttn.addEventListener('click', (e) => {
    titulo.remove();
})
//createElement fragment
//creamos un nodo que es una caja invisible
const cajaInvisible = document.createDocumentFragment();

for (let i = 0; i < 5; i++) {
    //creamos el elemento que tendra la caja
    const elemento = document.createElement("h2");
    elemento.textContent = `Estamos en un nodo de DOOM/ Linea ${i}`;
    if (i === 3) {
        elemento.remove();
    }
    //le agregamos al nodo(div invisible) el elemento creado
    cajaInvisible.appendChild(elemento);
}
console.log(cajaInvisible.childNodes.length);//comprobar que el nodo comtenga los elementos
/*while (cajaInvisible.firstChild) {
    cajaInvisible.removeChild(cajaInvisible.firstChild);
}
console.log(cajaInvisible.childNodes.length);//comprobar que se eliminen*/
//le agregamos el nodo en la pagina
document.body.appendChild(cajaInvisible);

