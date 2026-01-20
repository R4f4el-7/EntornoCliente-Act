const gameState = {
    turn: "Blancas",
    moves: 0
};

function updatePanel(state) {
    panel.textContent = `Turno: ${state.turn} | Movimientos: ${state.moves}`;
}

function nextMove() {
    gameState.moves++;
    gameState.turn = gameState.turn === "Blancas" ? "Negras" : "Blancas";
    updatePanel(gameState);
}

updatePanel(gameState);

