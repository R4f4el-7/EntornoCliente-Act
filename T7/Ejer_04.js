const input = document.querySelector("input");
const lista = document.getElementById("lista");
let servicios = [];

async function cargarServicios() {
    const response = await fetch("servicios.json");
    const data = await response.json();
    servicios = data.servicios;
}

function mostrarServicios(filtro) {
    lista.innerHTML = "";

    servicios
        .filter(servicio =>
            servicio.nombre.toLowerCase().includes(filtro.toLowerCase())
        )
        .forEach(servicio => {
            const li = document.createElement("li");
            li.textContent = servicio.nombre;
            lista.appendChild(li);
        });
}

input.addEventListener("input", (e) => {
    mostrarServicios(e.target.value);
});

cargarServicios();
