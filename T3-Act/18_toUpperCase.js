/*Pide al usuario el nombre de una pieza y la casilla destino.
Genera un mensaje del tipo:
"El [PIEZA] se ha movido a [CASILLA]".
Convierte todo el texto a mayúsculas.
Si la casilla contiene una letra “C”, muestra "Movimiento al flanco de dama".
Especificaciones Buenas prácticas:
Uso de funciones reutilizables.

Validación de contenido con includes().

Limpieza de código y mensajes claros.

Comenta y documenta tu código*/
const nombrePieza = prompt("Pieza nombre: ");
const casillaDestino = prompt("Destino: ");

const texto = `El ${nombrePieza} se ha movido ${casillaDestino}`.toUpperCase();

if(casillaDestino.includes("C")){
    console.log("Movimiento al flanco de dama");
}else{
    console.log(texto);
}
