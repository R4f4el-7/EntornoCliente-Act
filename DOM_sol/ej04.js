function createBoard() {
    board.textContent = "";
    const files = "abcdefgh";

    for (let rank = 8; rank >= 1; rank--) {
        for (let file = 0; file < 8; file++) {
            const square = document.createElement("div");
            const isDark = (rank + file) % 2 === 0;

            square.className = `square ${isDark ? "dark" : "light"}`;
            square.dataset.pos = files[file] + rank;

            board.appendChild(square);
        }
    }
}

createBoard();
