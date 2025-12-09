import {actualizarResumen, limpiarErrores, limpiarFormulario, mostrarMensaje, obtenerDatosFormulario} from "./ui.js";
import {
    validarFechaNoFutura,
    validarNombre,
    validarNombresDiferentes,
    validarResultadoSeleccionado
} from "./validators.js";
import {aniadirPartida, obtenerPartidas} from "./data.js";

/**
 * Función para inicializar el formulario y sus validaciones
 */
export function inicializarFormulario() {
    const form = document.getElementById("form-partida");
    const blancasInput = document.getElementById("blancas");
    const negrasInput = document.getElementById("negras");
    const resultadoInput = document.getElementById("resultado");
    const fechaInput = document.getElementById("fecha");

    blancasInput.addEventListener("input", e => {
        const datos = obtenerDatosFormulario();
        const nombreBlanca=datos.blancas;
        const nombreNegra=datos.negras;
        const validNombreBlanca=validarNombre(nombreBlanca) && validarNombresDiferentes(nombreBlanca, nombreNegra);
        if (!validNombreBlanca) {
            mostrarMensaje("err-blancas", "Nombre inválido para jugador de blancas.", "error");
        } else {
            mostrarMensaje("err-blancas", "", "");
        }
    });

    negrasInput.addEventListener("input", e => {
        const datos = obtenerDatosFormulario();
        const nombreNegra=datos.negras;
        const nombreBlanca=datos.blancas;
        const validNombreNegra=validarNombre(nombreNegra) && validarNombresDiferentes(nombreBlanca, nombreNegra);
        if (!validNombreNegra) {
            mostrarMensaje("err-negras", "Nombre inválido para jugador de negras.", "error");
        } else {
            mostrarMensaje("err-negras", "", "");
        }
    });

    resultadoInput.addEventListener("input", e => {
        const datos = obtenerDatosFormulario();
        const resultado=datos.resultado;
        if (!validarResultadoSeleccionado(resultado)) {
            mostrarMensaje("err-resultado", "Debe seleccionar un resultado válido.", "error");
        }else {
            mostrarMensaje("err-resultado", "", "");
        }
    });

    fechaInput.addEventListener("input", e => {
        const datos = obtenerDatosFormulario();
        const fecha=datos.fecha;
        const validFecha=validarFechaNoFutura(fecha);
        if (!validFecha) {
            mostrarMensaje("err-fecha", "La fecha no puede ser futura.", "error");
        } else {
            mostrarMensaje("err-fecha", "", "");
        }
    });

    form.addEventListener("submit", e => {
        e.preventDefault();
        limpiarErrores();
        const datos = obtenerDatosFormulario();
        if(validarNombre(datos.blancas) && validarNombresDiferentes(datos.blancas, datos.negras) && validarResultadoSeleccionado(datos.resultado) && validarFechaNoFutura(datos.fecha)) {
            const partida = {
                blancas: datos.blancas,
                negras: datos.negras,
                resultado: datos.resultado,
                fecha: datos.fecha
            };
            aniadirPartida(partida);
            limpiarFormulario();
            mostrarMensaje("ok", actualizarResumen(partida), "exito");
        }
    });
}