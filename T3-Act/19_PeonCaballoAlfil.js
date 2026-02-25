/*Crea un pequeño programa que simule si una jugada es válida en una versión simplificada del ajedrez.
El programa debe:

Definir una función esMovimientoValido(pieza, origen, destino) que:
Reciba tres parámetros:
pieza (ej. "♘", "♗", "♙")
origen (ej. "b1")
destino (ej. "c3")
Devuelva true si el movimiento es válido para esa pieza, o false en caso contrario.
Implementar la lógica solo para peón, caballo y alfil, usando coordenadas simplificadas:
Las columnas se representan con letras de "a" a "h".
Las filas se representan con números del 1 al 8.
Solo se comprueba la validez “geométrica”, no colisiones con otras piezas.
Mostrar por consola si el movimiento es válido o no con una frase del tipo:
Movimiento válido: ♘ de b1 a c3
Movimiento inválido: ♗ de c1 a c4

FASE 2
Añade una función auxiliar coordenadaAValor(letra) que convierta la letra de columna en número (a=1, b=2, etc.).
Permite que el usuario pruebe varios movimientos de forma simulada (array de jugadas) y el programa los valide en bucle.*/
function coordenadaAValor(letra){
    const valorLetra = { "a":1, "b":2,"c":3,"d":4,"e":5,"f":6, "g":7, "h":8 }
    return valorLetra[letra.toLowerCase()]
}
function validarPosicion(x, y){
    if(isNaN(x) || isNaN(y)) return false;
    if(!isFinite(x) || !isFinite(y)) return false;
    if(x >= 9 || x <= 0 || y >= 9 || y <= 0) return false;
    return true;
}
function esMovimientoValido(pieza, origen, destino){
    const columnaOrigen = coordenadaAValor(origen.charAt(0));
    const filaOrigen = parseInt(origen.charAt(1));
    const columnaDestino = coordenadaAValor(destino.charAt(0));
    const filaDestino = parseInt(destino.charAt(1));

    //validacion de movimiento
    if (
        !validarPosicion(columnaOrigen, filaOrigen) ||
        !validarPosicion(columnaDestino, filaDestino)
    ) {
        return false;
    }

    // Calcular diferencias
    const dx = Math.abs(columnaDestino - columnaOrigen);
    const dy = Math.abs(filaDestino - filaOrigen);

    switch(pieza){

        // ♙ Peón (avance simple hacia arriba)
        case "♙":
            return dx === 0 && dy === 1;

        // ♘ Caballo (movimiento en L)
        case "♘":
            return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);

        // ♗ Alfil (diagonal)
        case "♗":
            return dx === dy && dx !== 0;

        default:
            return false;
    }
}
const jugadas = [
    {pieza:"♘",origen:"a1",destino:"a2"},
    {pieza:"♘",origen:"g1",destino:"f3"},
    {pieza:"♙",origen:"d2",destino:"d3"},
    {pieza:"♙",origen:"d2",destino:"d5"}
]

jugadas.forEach((j) => {
    const valido = esMovimientoValido(j.pieza,j.origen,j.destino);
    console.log(`${valido ? "Movimiento valido": "Movimiento invalido"} de ${j.pieza} desde ${j.origen} hasta ${j.destino}`);
})
