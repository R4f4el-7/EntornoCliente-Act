// main.js

import { validarFormulario } from "./validators.js";
import { obtenerDatosFormulario, mostrarMensaje, limpiarMensaje, reiniciarFormulario } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formArbitro");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        limpiarMensaje();

        const datos = obtenerDatosFormulario();
        const validacion = validarFormulario(datos);

        if (validacion.valido) {
            mostrarMensaje("Árbitro registrado correctamente.");
            reiniciarFormulario();
        } else {
            mostrarMensaje(validacion.mensaje, "error");
        }
    });
});

