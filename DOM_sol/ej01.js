// Todas las funciones puras arriba
// Renderizado separado
// Estado separado

const gameState = {
    pawns: Array(8).fill("♙")
};

const board = document.getElementById("board");

function renderPawns(state) {
    board.textContent = "";

    for (const pawn of state.pawns) {
        const piece = document.createElement("span");
        piece.textContent = pawn;
        piece.style.margin = "5px";
        board.appendChild(piece);
    }
}

// Initial render
renderPawns(gameState);
