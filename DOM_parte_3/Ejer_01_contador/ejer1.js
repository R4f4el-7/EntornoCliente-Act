// 1. Estado
const state = { value: 0 };

// 2. Render
function render() {
    document.getElementById('counter').textContent = state.value;
}

// 3. Listeners
document.getElementById('inc').addEventListener('click', () => {
    state.value += 1; // actualizar estado
    render();         // renderizar DOM desde estado
});

document.getElementById('dec').addEventListener('click', () => {
    state.value -= 1;
    render();
});

// Inicializar render
render();
