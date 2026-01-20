const info = document.getElementById("panel");

function updateInfo() {
    const count = gameState.pawns.filter(Boolean).length;
    info.textContent = `Peones en juego: ${count}`;
}

document.getElementById("addPawn").addEventListener("click", () => {
    gameState.pawns.push("♙");
    renderPawns(gameState);
    updateInfo();
});

document.getElementById("removePawn").addEventListener("click", () => {
    gameState.pawns.pop();
    renderPawns(gameState);
    updateInfo();
});

updateInfo();
