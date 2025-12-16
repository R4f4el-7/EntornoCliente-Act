import { crearCasilla } from './square.js';

export function crearTablero(tabla) {
    for (let fila = 8; fila >= 1; fila--) {
        for (let col = 0; col < 8; col++) {
            tabla.appendChild(crearCasilla(fila, col));
        }
    }
}