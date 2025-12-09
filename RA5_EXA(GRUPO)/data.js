export let partidas = [];

export function aniadirPartida(partida) {
    partidas.push(partida);
}

export function vaciarPartidas() {
    partidas.length = 0;
}

export function obtenerPartidas() {
    return partidas;
}