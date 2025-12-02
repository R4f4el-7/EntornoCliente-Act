/*✔ Obtener elementos
✔ Función de validación general
✔ Eventos input → validación en tiempo real
✔ Submit → prevenir recarga*/
// Obtener elementos
const form = document.getElementById("form");

// Validación
function validarFormulario() {
    let valido = true;

    // validaciones...

    return valido;
}

// Evitar recarga y validar al enviar
form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (validarFormulario()) {
        // Enviar datos o mostrar mensaje
    }
});
