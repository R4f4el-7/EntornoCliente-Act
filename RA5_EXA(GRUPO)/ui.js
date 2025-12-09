import {obtenerPartidas, vaciarPartidas} from "./data.js";

/**
 * función para obtener los datos del formulario
 * @returns {object} - Un objeto con los datos del formulario
 */
export function obtenerDatosFormulario() {
    const blancas = document.getElementById("blancas").value;
    const negras = document.getElementById("negras").value;
    const resultado = document.getElementById("resultado").value;
    const fecha = document.getElementById("fecha").value;

    return {
        blancas,
        negras,
        resultado,
        fecha
    };
}

/**
 * Función para mostrar mensajes de error o éxito en la interfaz
 * @param id
 * @param mensaje
 * @param tipo
 */
export function mostrarMensaje(id, mensaje, tipo) {
    const mensajeDiv = document.getElementById(id);
    mensajeDiv.textContent = mensaje;
    mensajeDiv.className = tipo; // 'error' o 'exito'
}

/**
 * Función para limpiar el formulario
 */
export function limpiarFormulario() {
    document.getElementById("form-partida").reset();
}

/**
 * Función para quitar errores de la clase error
 */
export function limpiarErrores() {
    const errores = document.querySelectorAll(".error");
    errores.forEach(err => err.textContent = "");
}

/**
 * Función para actualizar el resumen de partidas
 * @param partida
 * @return {string}
 */
export function actualizarResumen() {
    if (obtenerPartidas().length > 0) {
        const partida = obtenerPartidas()[obtenerPartidas().length - 1];
        return "Partida registradas: " + obtenerPartidas().length + " Última partida: "
            + partida.blancas + " vs " + partida.negras + " -- " + partida.resultado + " (" + partida.fecha + ")";
    }else {
        return "No hay partidas registradas.";
    }
}

/**
 * Función para manejar el botón de reset
 */
export function botonReset() {
    if (!confirm("¿Estás seguro de que quieres borrar todas las partidas registradas?")) {
        return;
    }
    vaciarPartidas();
    actualizarResumen();
    mostrarMensaje("ok", `Registro vaciado correctamente\n ${actualizarResumen()}`, "exito");
}