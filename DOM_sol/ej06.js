const gameState = {
    pieces: [
        { type: "pawn", position: "e2" },
        { type: "pawn", position: "d2" }
    ]
};

function renderPieces(state) {
    document.querySelectorAll(".square")
        .forEach(square => square.textContent = "");

    for (const piece of state.pieces) {
        const square = document.querySelector(`[data-pos="${piece.position}"]`);
        if (square) square.textContent = "♙";
    }
}

renderPieces(gameState);
