const gameStateBoard = { selected: null };
const board = document.getElementById('board');

// 1. Generar 8 casillas
for (let i = 0; i < 8; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.dataset.index = i;
    square.style.width = '50px';
    square.style.height = '50px';
    square.style.display = 'inline-block';
    square.style.border = '1px solid black';
    square.style.textAlign = 'center';
    square.style.lineHeight = '50px';
    square.style.cursor = 'pointer';
    board.appendChild(square);
}

// 2. Render
function renderBoard() {
    const squares = board.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.toggle('selected', square.dataset.index == gameStateBoard.selected);
    });
}

// 3. Delegación de eventos
board.addEventListener('click', (event) => {
    const square = event.target;
    if (square.classList.contains('square')) {
        gameStateBoard.selected = square.dataset.index;
        renderBoard();
    }
});

// Inicializar
renderBoard();
