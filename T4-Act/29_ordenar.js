/*Crea un programa que:

Pida cuántos jugadores hay.
Solicite sus nombres y puntuaciones (usando dos arrays).
Ordene los jugadores por puntuación de mayor a menor.
Muestre en consola la clasificación completa:
Ejemplo de salida:


1. Ana - 8 puntos
2. Luis - 6 puntos
3. Marta - 4 puntos

Especificaciones buenas prácticas: Usa variables, bucles y métodos combinados*/
const nombres = []
const puntuaciones = []
const jugadores = [];

const cantidadJugadores = parseInt(prompt('Cantidad de jugadores: '))

for(let i = 0; i < cantidadJugadores; i++){
    nombres.push(prompt(`Nombre de jugador ${i+1}: `));
    puntuaciones.push(parseInt(prompt(`Puntuacion de jugador ${i+1}: `)));
    jugadores.push({
        nombre:nombres[i],
        puntuaciones:puntuaciones[i]
    });
}

jugadores.sort((a, b) => b.puntuaciones - a.puntuaciones);

console.log('Clasificacion: ');
jugadores.forEach((jugador,index) => {
    console.log(`${index+1}. ${jugador.nombre} - ${jugador.puntuaciones} puntos`);
})
