/*Pida cuántos jugadores hay.
Solicite sus nombres y puntuaciones (usando dos arrays).
Ordene los jugadores por puntuación de mayor a menor.
Muestre en consola la clasificación completa:*/
const prompt = require("prompt-sync")({sigint:true});

let numJugadores = parseInt(prompt("cantidad de jugadores: "));
let arr_jugadores = [];
let arr_nombre = [];
let arr_puntuacion = [];

//nombres y puntuaciones
for (let i = 0; i < numJugadores; i++) {
    arr_nombre[i] = prompt("Nombre del jugador: ");
    arr_puntuacion[i] = parseInt(prompt("Puntuación: "));
    arr_jugadores.push({nombre:arr_nombre[i], puntuacion:arr_puntuacion[i]});//array de objetos
}

//Ordenar de mayor a menor puntuación
arr_jugadores.sort((a, b) => b.puntuacion - a.puntuacion);

//Mostrar
for (let i = 0; i < numJugadores; i++) {
    console.log((i+1)+"."+arr_jugadores[i].nombre+" - "+arr_jugadores[i].puntuacion+" puntos");
}

