function colocarPiezaAleatoria(pieza){
    let posicion_x = Math.floor(Math.random()* 8) + 1;
    let posicion_y = Math.floor(Math.random()* 8) + 1;

    console.log(`La pieza ${pieza} esta en la posicion ${posicion_x} , ${posicion_y}`);
}

colocarPiezaAleatoria("Torre")
colocarPiezaAleatoria("Alfil")
colocarPiezaAleatoria("Peon")