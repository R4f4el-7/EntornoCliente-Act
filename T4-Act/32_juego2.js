/*Requisitos:
Crea un módulo movimientos.js con una función moverPieza(origen, destino).
Crea otro módulo historial.js que exporte una función registrarJugada(jugada).
En juego.js, importa ambos y combina su uso:
    Llama a moverPieza() y registra la jugada.
Muestra el historial final en consola.
Añade una función en historial.js:
    mostrarHistorial(): muestra todas las jugadas con su número (1. e4, 2. e5, etc.).
    Utiliza funciones flecha y un closure para mantener el historial privado.*/
import {historial} from "./historial.js";
import {moverPieza} from "./movimientos.js";

let jugada = moverPieza("a1","a2");
let jugada2 = moverPieza("a2","b2");
let jugada3 = moverPieza("a3","b2");
historial.registrarJugada(jugada);
historial.registrarJugada(jugada2);
historial.registrarJugada(jugada3);
historial.mostrarHistorial()

