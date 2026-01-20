function movePawn(fromIndex, toIndex) {
    if (toIndex < 0 || toIndex >= gameState.pawns.length) return;

    gameState.pawns[toIndex] = gameState.pawns[fromIndex];
    gameState.pawns[fromIndex] = "";

    renderPawns(gameState);
}

movePawn(1, 3);
