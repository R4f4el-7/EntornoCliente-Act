/*Crear un contador simple de tiempo de turno.
Pistas:
Usa Date.now() para registrar el inicio.
Cuando termine el turno, calcula la diferencia.
Muestra el resultado en segundos.
Si supera 60 segundos, muestra "Tiempo excedido".*/
const inicio = Date.now()
while (!confirm("¿Desea terminar la partida?")) {
    // esperar hasta que diga que sí
}

const fin = Date.now();
const segundos = (fin - inicio) / 1000;

if (segundos > 60) {
    console.log(`Tiempo excedido`)
}else{
    console.log(`Ha transcurrido ${segundos.toFixed(2)} segundos`)
}