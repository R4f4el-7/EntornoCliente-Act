const piezas = ["rey", "reina", "torre", "alfil", "caballo", "peón", "torre", "alfil"];

function colocarPiezaAleatoria(item, index){
    let posicion_x = Math.floor(Math.random()* 8) + 1;
    let posicion_y = Math.floor(Math.random()* 8) + 1;

    console.log(`La pieza ${item} esta en la posicion ${posicion_x} , ${posicion_y}`);
}

piezas.forEach(colocarPiezaAleatoria)