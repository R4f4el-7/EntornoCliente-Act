const button = document.getElementById("load");
const list = document.getElementById("lista");
const errorMsg = document.getElementById("error");
button.addEventListener("click", cargarAperturas);
async function cargarAperturas() {
    list.innerHTML = "";
    errorMsg.textContent = "";
    try {
        const response = await fetch("https://explorer.lichess.ovh/masters");
        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor");
        }
        const data = await response.json();
// Mostramos solo las primeras 5 aperturas
        data.moves.slice(0, 5).forEach(move => {
            const li = document.createElement("li");
            li.textContent = `Movimiento: ${move.san} (${move.white + move.black + move.draws} partidas)`;
            list.appendChild(li);
        });
    } catch (error) {
        errorMsg.textContent = "No se han podido cargar las aperturas.";
    }
}
