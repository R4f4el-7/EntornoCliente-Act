/*Pide al usuario el nombre de una pieza y la casilla destino.
Genera un mensaje del tipo:
"El [PIEZA] se ha movido a [CASILLA]".
Convierte todo el texto a mayúsculas.
Si la casilla contiene una letra “C”, muestra "Movimiento al flanco de dama".*/
/**
 * Esta funcion convierte en mayuscula la pieza y la casilla
 * si contiene en la posicion la letra C se envia un mensaje
 * */
function piezaYcasilla(pieza, casilla){
    console.log("La pieza "+pieza.toUpperCase()+" se ha movido a la casilla "+casilla.toUpperCase());
    if(casilla.includes("c")){
        console.log("Movimiento al flanco de dama")
    }
}

piezaYcasilla("Torre", "c2")
piezaYcasilla("Alfil", "b3")
piezaYcasilla("Peon", "e4")