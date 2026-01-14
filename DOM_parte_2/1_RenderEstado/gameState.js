

const gameState = {
    pawns: ["♙", "a", "♙", "♙", "♙", "♙", "b", "♙"]
}
//----1----
const board = document.getElementById("board");
function renderPawns(state) {
    board.textContent = "";
    for (const pawn of state.pawns ) {
        const pawnElement = document.createElement("div");
        pawnElement.textContent = pawn;
        board.appendChild(pawnElement);
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
const celdasPeon = document.querySelectorAll('.square');
celdasPeon.forEach(celda => {
    celda.addEventListener('click', () => {
        if(celda.textContent === "♙") {
            limpiarHighlights()
            //Resaltar posibles movimientos
            let celdaPosteriorId = celda.id[0] + (parseInt(celda.id[1]) + 1);
            const posiblesMovs = [celdaPosteriorId];
            if ((parseInt(celda.id[1])) === 2) {
                posiblesMovs.push(celda.id[0] + (parseInt(celda.id[1]) + 2));
            }
            posiblesMovs.forEach(posible => {
                const celdaPosible = board.querySelector(`[data-pos='${posible}']`);
                celdaPosible.classList.toggle('highlight');
                //Mover peon a casilla resaltada
                celdaPosible.addEventListener('click', () => {
                    if(celdaPosible.classList.contains('highlight')){
                        celdaPosible.textContent = "♙";
                        celda.textContent = "";
                        limpiarHighlights();
                    }
                })
            })

        }
    })
});

function limpiarHighlights() {
    const celdas = document.querySelectorAll('.square');
    celdas.forEach(celda => {
        celda.classList.remove('highlight');
    });
}
