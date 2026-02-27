/*Pida al usuario cuántas jugadas desea registrar.
Use un bucle for para solicitar cada jugada (por ejemplo: "e4", "e5", "Cf3"...).
Las almacene en un array.
Muestre al final en consola:
    Todas las jugadas registradas.
    El número total de jugadas (length).
    La primera y última jugada.
Después de registrar las jugadas, pregunta si el jugador quiere deshacer la última.
Si responde “sí”, usa .pop() y muestra el nuevo listado actualizado.*/

const prompt=require("prompt-sync")({sigint:true});

let cantidad_jugadas = prompt("Cantidad de jugadas: ");

//array que contendra las jugadas de la partida
const arr_jugadas = [];

for (let i = 0; i < cantidad_jugadas; i++) {
    let elemento = prompt("Jugada(e4,e5...): ")
    arr_jugadas.push(elemento);
}
//Registro de jugadas, total jugadas ,y primer y ultimo elemento
console.log("------Elementos del array-------");
console.log("Jugadas: "+arr_jugadas.join(", "));

console.log("Numero total de jugadass: "+arr_jugadas.length)
console.log("Primer elemento del array: "+arr_jugadas[0]);
console.log("Ultimo elemento del array: "+arr_jugadas[arr_jugadas.length-1]);
//Deshacer jugada
let respuesta = prompt("Deshacer ultima jugada (si/no): ");

if (respuesta == "si"){
    arr_jugadas.pop();
    console.log("Jugadas: "+arr_jugadas.join(", "));
}
