const arr_jugada = [];
export function registrarJugada(jugada){
    arr_jugada.push(jugada);
    console.log(`Se ha guardado la jugada ${jugada}`);
}
export function mostrarHistorial(){
    const arr_jugada_indice = arr_jugada.map((jugada, indice) => `${indice + 1}. ${jugada}`);
    console.log(arr_jugada_indice);
}