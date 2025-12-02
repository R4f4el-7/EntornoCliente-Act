// Obtener elementos
const nombre = document.getElementById("nombre_torneo");
const rondas = document.getElementById("numero_rondas");
const ciudad = document.getElementById("ciudad_torneo");

const errorNombre = document.getElementById("errorNombre");
const errorRondas = document.getElementById("errorNumeroRondas");
const errorCiudad = document.getElementById("errorCiudad");

const boton = document.getElementById("enviar");
const form = document.getElementById("form_torneo");

// Desactivar botón al inicio
boton.disabled = true;

// Función de validación general
function validarFormulario() {
    let valido = true;

    // Validar nombre (mínimo 3 caracteres)
    if (nombre.value.trim().length < 3) {
        errorNombre.textContent = "Mínimo 3 caracteres.";
        valido = false;
    } else {
        errorNombre.textContent = "";
    }

    // Validar rondas (entre 1 y 15)
    const num = Number(rondas.value);
    if (isNaN(num) || num < 1 || num > 15) {
        errorRondas.textContent = "Debe ser un número entre 1 y 15.";
        valido = false;
    } else {
        errorRondas.textContent = "";
    }

    // Validar ciudad (solo letras)
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!soloLetras.test(ciudad.value.trim())) {
        errorCiudad.textContent = "Solo letras.";
        valido = false;
    } else {
        errorCiudad.textContent = "";
    }

    // Activar o desactivar botón
    boton.disabled = !valido;
}

// Escuchar eventos input (validación en tiempo real)
nombre.addEventListener("input", validarFormulario);
rondas.addEventListener("input", validarFormulario);
ciudad.addEventListener("input", validarFormulario);

// Evitar que se recargue el formulario
form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("mensajeFinal").textContent = "Formulario enviado correctamente.";
});