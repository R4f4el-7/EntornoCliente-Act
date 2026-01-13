/**
 * Coloca un peón y le permite moverse
 * @param {string} origenId_ - "e2"
 * @param {string} destinoId - "e4"
 */
export function colocarPeon(origenId_, destinoId) {
    const origen = document.getElementById(origenId_);
    const destino = document.getElementById(destinoId);

    if (!origen || !destino) return;

    origen.textContent = "♙";

    origen.addEventListener('click', () => {
        origen.textContent = "";
        destino.textContent = "♙";
    });
}
