/*Registra las jugadas en un array.
Usa filter() para obtener solo las capturas (jugadas con “x”).
Usa map() para numerarlas: ["1. e4", "2. e5", "3. Cf3", ...].
Usa reduce() para contar cuántas jugadas totales hubo.
Muestra el resumen en consola:*/

let arr_jugadas = ["e4", "e5", "Cf3", "Cxf6", "d4", "exd4", "Ab5", "axb5", "O-O"];

let capturas = arr_jugadas.filter(jugada => jugada.includes("x"));

let jugadas_numeradas = arr_jugadas.map((jugada, indice) => `${indice + 1}. ${jugada}`);
console.log(jugadas_numeradas);

let total_jugadas = arr_jugadas.reduce((acum) => acum + 1, 0);

console.log("Jugadas totales: "+total_jugadas);
console.log("Capturas: "+capturas.length);
console.log("Media por jugador: "+total_jugadas/2);
