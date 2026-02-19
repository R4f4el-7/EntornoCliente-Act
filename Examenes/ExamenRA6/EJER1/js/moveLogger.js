const registro =[];
const lista_movimientos = document.getElementById("moves-list");

function registreMove(pieza, origen, destino){
    const movimiento = {
        pieza,
        origen,
        destino
    };
    registro.push(movimiento);
    //se crtea elemento y se añade
    const li = document.createElement("li");
    li.textContent = `${movimiento.pieza} de ${movimiento.origen} a ${movimiento.destino}`;
    lista_movimientos.appendChild(li);
}

//Ejemplo de uso
registreMove('Peón', 'e2', 'e4');
registreMove('Caballo', 'g1', 'f3');
registreMove('Alfil', 'f1', 'c4');
