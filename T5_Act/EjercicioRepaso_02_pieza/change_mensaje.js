document.addEventListener('DOMContentLoaded', () => {
    const selectPieza = document.getElementById('pieza');
    const mostrar = document.getElementById('mostrarPieza');

    selectPieza.addEventListener('change', () => {
        const pieza = selectPieza.value;

        // Reset color por defecto
        mostrar.style.color = 'black';

        if (pieza === 'peon') {
            mostrar.style.color = 'red';
        } else if (pieza === 'dama') {
            mostrar.style.color = 'green';
        }

        mostrar.textContent = `Has seleccionado: ${pieza.charAt(0).toUpperCase() + pieza.slice(1)}`;
    });
});