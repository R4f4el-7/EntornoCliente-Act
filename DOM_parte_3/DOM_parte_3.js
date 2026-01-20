//1
const counter = document.getElementById("counter");
const gameState = {
    value: 0
}
const btninc = document.getElementById("inc");
const btndec = document.getElementById("dec");

btninc.addEventListener("click", e => {
    gameState.value++;
    render(gameState);
})
btndec.addEventListener("click", e => {
    gameState.value--;
    render(gameState);
})

function render(state) {
    counter.textContent = state.value;
}
//2
const menu = document.getElementById("menu");
const out = document.getElementById("output");
menu.addEventListener("click", e => {
    const liSeleccionada= e.target;
    out.textContent = `Seccion seleccionada: ${liSeleccionada.textContent}`;
})
//3
const gameState2 = {
    moves: 0
}
const btnMove = document.getElementById("addMove");
const info = document.getElementById("info");

btnMove.addEventListener("click", e => {
    gameState2.moves++;
    renderMoves(gameState2);
})
function renderMoves(state) {
    info.textContent = state.moves;
}
//4
const gameState3 = {
    selected: null
}
