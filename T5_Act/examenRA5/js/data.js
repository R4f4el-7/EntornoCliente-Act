export let partidas = [];

export function addPartida(obj) {
    partidas.push(obj);
}

export function resetPartidas() {
    partidas.length = 0; // vacía sin crear nuevo array
}
