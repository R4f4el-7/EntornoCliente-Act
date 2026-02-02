const gameState = { moves: 0 };

const info = document.getElementById('info');
const addMoveBtn = document.getElementById('addMove');

function renderMoves() {
    info.textContent = `Jugadas realizadas: ${gameState.moves}`;
}

addMoveBtn.addEventListener('click', () => {
    gameState.moves += 1; // modificar estado
    renderMoves();        // actualizar DOM desde estado
});

// Inicial render
renderMoves();
