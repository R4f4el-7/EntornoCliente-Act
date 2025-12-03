import { validarNombre, nombresDiferentes, validarFecha, validarResultado } from "./validators.js";
import { mostrarError, limpiarErrores, mostrarOK, actualizarResumen } from "./ui.js";
import { addPartida, resetPartidas, partidas } from "./data.js";

export function configurarFormulario() {

    const form = document.getElementById("form-partida");
    const btnReset = document.getElementById("btn-reset");

    const inputBlancas = document.getElementById("blancas");
    const inputNegras = document.getElementById("negras");
    const inputFecha = document.getElementById("fecha");
    const inputResultado = document.getElementById("resultado");

    // VALIDACIÓN TIEMPO REAL (igual que antes)
    inputBlancas.addEventListener("input", () => {
        mostrarError("err-blancas",
            validarNombre(inputBlancas.value) ? "" : "El nombre solo puede tener letras y espacios."
        );
    });

    inputNegras.addEventListener("input", () => {
        let mensajeError = "";

        if (!validarNombre(inputNegras.value)) {
            mensajeError = "El nombre solo puede tener letras y espacios.";
        } else if (!nombresDiferentes(inputBlancas.value, inputNegras.value)) {
            mensajeError = "El nombre no puede ser igual al de blancas";
        }

        mostrarError("err-negras", mensajeError);
    });

    inputFecha.addEventListener("input", () => {
        mostrarError("err-fecha",
            validarFecha(inputFecha.value) ? "" : "La fecha no puede ser futura."
        );
    });

    // SUBMIT FINAL
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        limpiarErrores();

        let valido = true;

        if (!validarNombre(inputBlancas.value)) {
            mostrarError("err-blancas", "El nombre solo puede tener letras y espacios.");
            valido = false;
        }

        if (!validarNombre(inputNegras.value)) {
            mostrarError("err-negras", "El nombre solo puede tener letras y espacios.");
            valido = false;
        }

        if (!nombresDiferentes(inputBlancas.value, inputNegras.value)) {
            mostrarError("err-blancas", "Los nombres no pueden ser iguales.");
            mostrarError("err-negras", "Los nombres no pueden ser iguales.");
            valido = false;
        }

        if (!validarFecha(inputFecha.value)) {
            mostrarError("err-fecha", "La fecha no puede ser futura.");
            valido = false;
        }

        if (!validarResultado(inputResultado.value)) {
            mostrarError("err-resultado", "Resultado no válido.");
            valido = false;
        }

        if (!valido) return;

        // EJERCICIO 2: GUARDAR PARTIDA EN MEMORIA
        addPartida({
            blancas: inputBlancas.value.trim(),
            negras: inputNegras.value.trim(),
            resultado: inputResultado.value,
            fecha: inputFecha.value
        });

        // Actualizar pantalla
        actualizarResumen();

        form.reset();
    });


    // ---------------- RESET --------------------
    btnReset.addEventListener("click", () => {
        if (!confirm("¿Seguro que deseas borrar todas las partidas?")) return;

        resetPartidas();
        actualizarResumen();
        mostrarOK("Registro vaciado correctamente.");
    });
}

