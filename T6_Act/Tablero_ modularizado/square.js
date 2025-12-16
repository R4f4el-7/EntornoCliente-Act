export const columnas = ["a","b","c","d","e","f","g","h"];

export function crearCasilla(fila, col) {
    const casilla = document.createElement('div');
    casilla.classList.add('square');

    asignarColor(casilla, fila, col);
    casilla.id = columnas[col] + fila;

    return casilla;
}

function asignarColor(casilla, fila, col) {
    const esPar = (fila + col) % 2 === 0;
    casilla.classList.add(esPar ? 'light' : 'dark');
}