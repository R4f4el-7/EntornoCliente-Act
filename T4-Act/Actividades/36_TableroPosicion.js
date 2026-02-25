//Contador de movimientos
let totalMovimientos = 0;
//Historial de movimientos
let historialMovimientos = [];

//funcion para mostrar el tablero
function mostrarTablero(tablero) {
    for (let i = 0; i < tablero.length; i++) {
        console.log(tablero[i].join(" "));
    }
}
//Función para mover piezas (sin validar reglas aún)
function moverPieza(tablero, origen, destino, origenNotacion, destinoNotacion) {
    const [filaOrigen, colOrigen] = origen;
    const [filaDestino, colDestino] = destino;

    //Validar que las coordenadas estén dentro del tablero
    if (
        filaOrigen < 0 || filaOrigen > 7 ||
        colOrigen < 0 || colOrigen > 7 ||
        filaDestino < 0 || filaDestino > 7 ||
        colDestino < 0 || colDestino > 7
    ) {
        console.log("Movimiento fuera del rango del tablero (0–7).");
        return; // No hacer el movimiento
    }

    const pieza = tablero[filaOrigen][colOrigen];

    if (pieza === "." || pieza === "") {
        console.log("No hay ninguna pieza en la casilla de origen.");
        return;
    }
    //Indicar si la casilla destino estaba ocupada.
    const destinoAnterior = tablero[filaDestino][colDestino];

    if (destinoAnterior !== "." && destinoAnterior !== "") {
        console.log(`La casilla destino estaba ocupada por "${destinoAnterior}".`);
    } else {
        console.log("La casilla destino estaba vacía.");
    }

    // Mover la pieza
    tablero[filaDestino][colDestino] = pieza;
    tablero[filaOrigen][colOrigen] = ".";

    // Incrementar contador de movimientos
    totalMovimientos++;
    console.log(`Número total de movimientos realizados: ${totalMovimientos}`);

    // Registrar movimiento en el historial
    historialMovimientos.push(`${origenNotacion} → ${destinoNotacion}`);
    console.log("Historial de movimientos:", historialMovimientos);
}
//Inicialice el tablero con las piezas en sus posiciones iniciales.
const tablero = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];
//Muestre el tablero en consola.
mostrarTablero(tablero);
//Permita al usuario (por prompt()) elegir una pieza y moverla a otra posición
let posicion = { "a":0, "b":1, "c":2, "d":3, "e":4, "f":5, "g":6, "h":7 };

let origen = prompt("Posición de origen (ej. e2, e5 ...): ");
let destino = prompt("Posición de destino (ej. e2, e5 ...): ");

//Convertir la notación de ajedrez a índices de array
let fila_origen = 8 - parseInt(origen[1]);  // invertimos filas
let columna_origen = posicion[origen[0]];

let fila_destino = 8 - parseInt(destino[1]);
let columna_destino = posicion[destino[0]];

moverPieza(tablero, [fila_origen, columna_origen], [fila_destino, columna_destino], origen, destino);
//Actualice y muestre el tablero tras el movimiento.
mostrarTablero(tablero);