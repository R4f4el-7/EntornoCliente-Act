document.addEventListener("DOMContentLoaded", () => {

    // 1. Obtener referencias a los elementos del DOM
    const form = document.getElementById("formPartida");
    const minuto = document.getElementById("minuto");
    const incremento = document.getElementById("incremento");
    const errorMinuto = document.getElementById("minutoError");
    const errorIncremento = document.getElementById("incrementoError");
    const mensajeFinal = document.getElementById("mensajeFinal");

    // 2. Expresiones regulares / patrones
    const patron_numero = /^[0-9]+$/;

    // 3. Funciones de utilidad
    function mostrarError(element, mensaje) {
        element.textContent = mensaje;
    }

    function limpiarError(element) {
        element.textContent = "";
    }

    // 4. Funciones de validación por campo
    function validarMinuto() {
        const valor = minuto.value.trim();
        if (!valor) {
            mostrarError(errorMinuto, "Minuto obligatorio");
            return false;
        }
        if (!patron_numero.test(valor)) {
            mostrarError(errorMinuto, "Minuto no válido");
            return false;
        }
        if (Number(valor) <= 0) {
            mostrarError(errorMinuto, "Minuto debe ser mayor que 0");
            return false;
        }
        limpiarError(errorMinuto);
        return true;
    }

    function validarIncremento() {
        const valor = incremento.value.trim();
        if (valor === "") return true; // vacío es válido
        if (!patron_numero.test(valor)) {
            mostrarError(errorIncremento, "Incremento no válido");
            return false;
        }
        if (Number(valor) < 0) {
            mostrarError(errorIncremento, "Incremento no puede ser negativo");
            return false;
        }
        limpiarError(errorIncremento);
        return true;
    }

    // 5. Validación en tiempo real (input events)
    minuto.addEventListener("input", () => {
        validarMinuto();
        mensajeFinal.textContent = "";
    });
    incremento.addEventListener("input", () => {
        validarIncremento();
        mensajeFinal.textContent = "";
    });

    // 6. Validación del formulario al submit
    form.addEventListener("submit", e => {
        e.preventDefault();

        const minutoValido = validarMinuto();
        const incrementoValido = validarIncremento();

        if (minutoValido && incrementoValido) {
            const min = Number(minuto.value.trim());
            const inc = incremento.value.trim() === "" ? 0 : Number(incremento.value.trim());
            const resultado = min + inc * 40;

            form.reset();
            mensajeFinal.textContent = `Duración estimada: ${resultado} minutos`;
        }
    });

});
