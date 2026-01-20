

const gameState = {
    pawns: ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"]
}
//----1----
const board = document.getElementById("board");
function renderPawns(state) {
    board.textContent = "";
    for (const peon of state.pawns ) {
        const peonElemento = document.createElement("div");
        peonElemento.textContent = peon;
        board.appendChild(peonElemento);
    }
}
renderPawns(gameState)
//----2----
function movePawn(fromIndex, toIndex) {
    const peon = gameState.pawns[toIndex];
    if(toIndex > 7){
        return;
    }
    gameState.pawns[toIndex] = gameState.pawns[fromIndex];
    gameState.pawns[fromIndex] = peon;

    console.log("Peon se ha movido de "+fromIndex+" a "+toIndex);
    renderPawns(gameState);
}
movePawn(1, 6);
//----3----
const btnCrear = document.createElement("button");
const btnEliminar = document.createElement("button");
const contador = document.createElement("span");

btnCrear.textContent = "Crear Peón";
btnEliminar.textContent = "Eliminar Peón";
contador.textContent = ' Peones: ' + gameState.pawns.length;

document.body.appendChild(btnCrear);
document.body.appendChild(btnEliminar);
document.body.appendChild(contador);

btnCrear.addEventListener("click", () => {
    gameState.pawns.push("♙");
    contador.textContent = ' Peones: ' + gameState.pawns.length;
    renderPawns(gameState);
})
btnEliminar.addEventListener("click", () => {
    gameState.pawns.pop();
    contador.textContent = ' Peones: ' + gameState.pawns.length;
    renderPawns(gameState);
})
//----4----
const columnas = ["a","b","c","d","e","f","g","h"];
function crearSquare(fila, col){
    const square = document.createElement("div");
    square.classList.add('square');

    asignarColor(square, fila, col);
    square.id = columnas[col] + fila;
    console.log(square.id);
    square.dataset.pos = square.id;

    return square;
}
function asignarColor(square, fila, col) {
    const esPar = (fila + col) % 2 === 0;
    square.classList.add(esPar ? 'light' : 'dark');
}

function crearBoard(){
    for (let fila = 8; fila >= 1; fila--) {
        for (let col = 0; col < 8; col++) {
            board.appendChild(crearSquare(fila,col));
        }
    }
}
crearBoard()
//----5----
/*
const celdas = document.querySelectorAll('.square');
celdas.forEach(celda => {
    celda.addEventListener('click', () => {
        alert('Celda: ' + celda.id);
    });
});*/
//----6----
const gameState2 = {
    pieces: [{type: "pawn", pos:"a2"},
        {type: "pawn", pos:"b2"},
        {type: "pawn", pos:"c2"},
        {type: "pawn", pos:"d2"},
        {type: "pawn", pos:"e2"},
        {type: "pawn", pos:"f2"},
        {type: "pawn", pos:"g2"},
        {type: "pawn", pos:"h2"}]
}
function renderPieces(state) {
    state.pieces.forEach(piece => {
        const squarePeon = board.querySelector(`[data-pos='${piece.pos}']`);
        if (squarePeon) {
            squarePeon.textContent = "♙";
        }
    })
}
renderPieces(gameState2);
//----7----
//Variable para llevar la pieza seleccionada
let peonSeleccionado = null;

//Listener único para odo el tablero
board.addEventListener('click', (e) => {
    const celdaClick = e.target;
    console.log(celdaClick);
    //Si no hay peón seleccionado, intentar seleccionar uno
    if (!peonSeleccionado) {
        if (celdaClick.textContent === "♙") {
            peonSeleccionado = celdaClick;
            limpiarHighlights();

            //Resaltar posibles movimientos
            const fila = parseInt(peonSeleccionado.id[1]);
            const col = peonSeleccionado.id[0];
            const posiblesMovs = [col + (fila + 1)];
            if (fila === 2) posiblesMovs.push(col + (fila + 2));

            posiblesMovs.forEach(pos => {
                const cd = board.querySelector(`[data-pos='${pos}']`);
                if (cd) cd.classList.add('highlight');
            });
        }
    } else {
        //Si ya hay un peón seleccionado, intentar moverlo
        if (celdaClick.classList.contains('highlight')) {
            celdaClick.textContent = "♙";
            peonSeleccionado.textContent = "";
            peonSeleccionado = null;
            nextMove()
            limpiarHighlights();
        } else if (celdaClick.textContent === "♙") {
            //Seleccionar otro peón en cualquier momento
            peonSeleccionado = celdaClick;
            limpiarHighlights();

            const fila = parseInt(peonSeleccionado.id[1]);
            const col = peonSeleccionado.id[0];
            const posiblesMovs = [col + (fila + 1)];
            if (fila === 2) posiblesMovs.push(col + (fila + 2));

            posiblesMovs.forEach(pos => {
                const cd = board.querySelector(`[data-pos='${pos}']`);
                if (cd) cd.classList.add('highlight');
            });
        } else {
            //Click en celda vacía no resaltada -> deseleccionar
            peonSeleccionado = null;
            limpiarHighlights();
        }
    }
});

function limpiarHighlights() {
    const celdas = document.querySelectorAll('.square');
    celdas.forEach(c => c.classList.remove('highlight'));
}
//----8----
const gameState3 = {
    turn: "Blancas",
    moves: 0
};
const panel = document.createElement("div");
panel.id = "panel";
document.body.appendChild(panel);

function updatePanel(state){
    panel.textContent = `Turno: ${state.turn} | Movimientos: ${state.moves}`;
}
function nextMove(){
    gameState3.moves++;
    gameState3.turn = gameState3.turn === "Blancas" ? "Negras" : "Blancas";
    updatePanel(gameState3);
}
updatePanel(gameState3)
//----9----
//Función para deshacer el último movimiento en el panel
function undoMove(){
    if(gameState3.moves > 0){
        gameState3.moves--;
        gameState3.turn = gameState3.turn === "Blancas" ? "Negras" : "Blancas";
        updatePanel(gameState3);
    }
}
document.addEventListener("keydown", (event) => {
    if (event.key === "r") {
        location.reload();
    }else if (event.key === "u") {
        undoMove();
    }
});
const mostrarEstadoBtn = document.createElement("button");
mostrarEstadoBtn.textContent = "Mostrar Estado del Juego";
document.body.appendChild(mostrarEstadoBtn);

mostrarEstadoBtn.addEventListener("click", () => {
    console.log(gameState3);
});


