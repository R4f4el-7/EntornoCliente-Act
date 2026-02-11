const lista = document.getElementById("lista");

async function cargarMovimientos() {
    const response = await fetch("movimientos.json");
    const data = await response.json();

    data.movimientos.forEach(mov => {
        const li = document.createElement("li");
        li.textContent = `${mov.pieza}: ${mov.from} → ${mov.to}`;
        lista.appendChild(li);
    });
}

cargarMovimientos();
