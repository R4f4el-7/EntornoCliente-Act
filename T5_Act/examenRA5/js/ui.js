import { partidas } from "./data.js";

export function mostrarError(idElemento, mensaje) {
    document.getElementById(idElemento).textContent = mensaje;
}

export function limpiarErrores() {
    document.querySelectorAll(".error").forEach(p => p.textContent = "");
}

export function mostrarOK(texto = "Partida registrada correctamente.") {
    document.getElementById("ok").textContent = texto;
}

// EJERCICIO 2: actualizar resumen
export function actualizarResumen() {
    const resumen = document.getElementById("ok");

    if (partidas.length === 0) {
        resumen.textContent = "No hay partidas registradas.";
        return;
    }

    const ultima = partidas[partidas.length - 1];

    resumen.textContent =
        `Partidas registradas: ${partidas.length}\n` +
        `Última partida: ${ultima.blancas} vs ${ultima.negras} — ${ultima.resultado} (${ultima.fecha})`;
}

