const boton = document.getElementById("load");
const lista = document.getElementById("lista");

async function cargarHistorial() {
    lista.innerHTML = ""; // limpiar historial

    const response = await fetch("movimientos.json");
    const data = await response.json();

    data.movimientos.forEach((mov, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${mov.pieza}: ${mov.from} → ${mov.to}`;
        lista.appendChild(li);
    });
}

boton.addEventListener("click", cargarHistorial);
