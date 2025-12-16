export const columnas = ["a","b","c","d","e","f","g","h"];

/**
 * Crea una casilla del tablero
 * @param {number} fila - Número de fila (1 a 8)
 * @param {number} col - Índice de columna (0 a 7)
 * @returns {HTMLDivElement} casilla creada
 */
export function crearCasilla(fila, col) {
    const casilla = document.createElement('div');
    casilla.classList.add('square');

    asignarColor(casilla, fila, col);
    casilla.id = columnas[col] + fila;

    return casilla;
}
/**
 * Asigna el color correcto a la casilla
 * (función interna, no se exporta)
 */
function asignarColor(casilla, fila, col) {
    const esPar = (fila + col) % 2 === 0;
    casilla.classList.add(esPar ? 'light' : 'dark');
}