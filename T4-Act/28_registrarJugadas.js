/*Pida al usuario cuántas jugadas desea registrar.
Use un bucle for para solicitar cada jugada (por ejemplo: "e4", "e5", "Cf3"...).
Las almacene en un array.
Muestre al final en consola:
Todas las jugadas registradas.
El número total de jugadas (length).
La primera y última jugada.
Después de registrar las jugadas, pregunta si el jugador quiere deshacer la última.
Si responde “sí”, usa .pop() y muestra el nuevo listado actualizado.
Ejemplo de salida:

Jugadas registradas: e4, e5, Cf3, Cc6
Total: 4
Primera: e4
Última: Cc6
Especificaciones buenas prácticas: Usa variables, bucles y métodos combinados*/
const jugadas =[]
const numeroJugadas = parseInt(prompt('Cantidad de jugadas: '))

for(let i = 0; i < numeroJugadas; i++){
    jugadas.push(prompt(`Jugada ${i+1}: `));
}

console.log(`Jugadas registradas: ${jugadas}`);
console.log(`Total: ${jugadas.length}`);
console.log(`Primera: ${jugadas[0]}`);
console.log(`Ultima: ${jugadas[jugadas.length-1]}`);

if(confirm('¿Deshacer la ultima jugada?')){
    const eliminado = jugadas.pop()
    console.log(`Elemento eliminado: ${eliminado}`);
    console.log(`Jugadas actualizada: ${jugadas}`);
}