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
const celdas = document.querySelectorAll('.square');
celdas.forEach(celda => {
    celda.addEventListener('click', () => {
        alert('Celda: ' + celda.id);
    });
});