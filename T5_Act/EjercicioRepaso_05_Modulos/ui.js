// ui.js

export function obtenerDatosFormulario() {
    const nombre = document.getElementById("nombre").value;
    const nivel = document.getElementById("nivel").value;
    return { nombre, nivel };
}

export function mostrarMensaje(mensaje, tipo = "exito") {
    const divMensaje = document.getElementById("mensaje");
    divMensaje.textContent = mensaje;
    divMensaje.style.color = tipo === "exito" ? "green" : "red";
    divMensaje.style.display = "block";
}

export function limpiarMensaje() {
    const divMensaje = document.getElementById("mensaje");
    divMensaje.textContent = "";
    divMensaje.style.display = "none";
}

export function reiniciarFormulario() {
    document.getElementById("formArbitro").reset();
}

