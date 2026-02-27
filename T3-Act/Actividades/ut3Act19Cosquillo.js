let posicion ={"a":1, "b":2, "c":3, "d":4, "e":5, "f":6, "g":7, "h":8}
function esMovimientoValido(pieza, origen, destino){
    switch (pieza) {
        case "♙": // Peón
            peonValido(origen, destino);
            break;
        case "♘": // Caballo
            caballoValido(origen, destino);
            break;
        case "♗": // Alfil
            alfilValido(origen, destino);
            break
        default:
            console.log("Pieza no reconocida");
            break;
    }
}
function peonValido(origen, destino){
    columna_origen = posicion[origen.slice(0,1)];
    fila_origen = parseInt(origen.slice(1,2));
    columna_destino = posicion[destino.slice(0,1)];
    fila_destino = parseInt(destino.slice(1,2));

    if(fila_destino == fila_origen+1){
        console.log("Movimiento valido");
    }else{
        console.log("Movimiento no valido");
    }
}
function caballoValido(origen, destino){
    columna_origen = parseInt(posicion[origen.slice(0,1)]);
    fila_origen = parseInt(origen.slice(1,2));
    columna_destino = parseInt(posicion[destino.slice(0,1)]);
    fila_destino = parseInt(destino.slice(1,2));

    diferencia_columna = Math.abs(columna_destino - columna_origen)
    diferencia_fila = Math.abs(fila_destino - fila_origen);

    if((diferencia_columna === 1 && diferencia_fila === 2) || (diferencia_columna === 2 && diferencia_fila === 1)){
        console.log("Movimiento valido");
    }else{
        console.log("Movimiento no valido");
    }
}
function alfilValido(origen, destino){
    columna_origen = parseInt(posicion[origen.slice(0,1)]);
    fila_origen = parseInt(origen.slice(1,2));
    columna_destino = parseInt(posicion[destino.slice(0,1)]);
    fila_destino = parseInt(destino.slice(1,2));

    diferencia_columna = Math.abs(columna_destino - columna_origen)
    diferencia_fila = Math.abs(fila_destino - fila_origen);

    if(diferencia_columna ===diferencia_fila){
        console.log("Movimiento valido");
    }else{
        console.log("Movimiento no valido");
    }
}

esMovimientoValido("♙", "a2", "a3");
esMovimientoValido("♙", "a2", "a4"); 
esMovimientoValido("♘", "b1", "c3");
esMovimientoValido("♘", "b1", "b3");
esMovimientoValido("♗", "f1", "c4");
esMovimientoValido("♗", "c1", "c4");


