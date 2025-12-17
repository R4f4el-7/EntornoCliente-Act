/**
 * Coloca un peón y le permite moverse
 * @param {string} origenId - "e2"
 * @param {string} destinoId - "e4"
 */
export function colocarPeon(origenId, destinoId) {
    const origen = document.getElementById(origenId);
    const destino = document.getElementById(destinoId);

    if (!origen || !destino) return;

    origen.textContent = "♙";

    origen.addEventListener('click', () => {
        origen.textContent = "";
        destino.textContent = "♙";
    });
}
