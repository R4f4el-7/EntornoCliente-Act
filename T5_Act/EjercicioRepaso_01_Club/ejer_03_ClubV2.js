document.addEventListener('DOMContentLoaded', () => {
    //Referencias a inputs y errores
    const formulario = document.getElementById('formClub');

    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const telefonoInput = document.getElementById('telefono');

    const errorNombre = document.getElementById('errorNombre');
    const errorCorreo = document.getElementById('errorCorreo');
    const errorTelefono = document.getElementById('errorTelefono');

    const mensajeFinal = document.getElementById('mensajeFinal');

    //Patrones / constantes
    const PATRON_NOMBRE = /^[a-zA-Z ]+$/;
    const PATRON_CORREO = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    const PATRON_TELEFONO = /^[0-9]{9}$/;

    //Funciones de utilidad
    function mostrarError(element, mensaje) {
        element.textContent = mensaje;
    }

    function limpiarError(element) {
        element.textContent = '';
    }

    //Funciones de validación
    function validarNombre() {
        const valor = nombreInput.value.trim();
        if (!valor) {
            mostrarError(errorNombre, 'El nombre es requerido');
            return false;
        }
        if (!PATRON_NOMBRE.test(valor)) {
            mostrarError(errorNombre, 'El nombre no es válido');
            return false;
        }
        limpiarError(errorNombre);
        return true;
    }

    function validarCorreo() {
        const valor = correoInput.value.trim();
        if (!valor) {
            mostrarError(errorCorreo, 'El correo es requerido');
            return false;
        }
        if (!PATRON_CORREO.test(valor)) {
            mostrarError(errorCorreo, 'El correo no es válido');
            return false;
        }
        limpiarError(errorCorreo);
        return true;
    }

    function validarTelefono() {
        const valor = telefonoInput.value.trim();
        if (!valor) {
            mostrarError(errorTelefono, 'El teléfono es requerido');
            return false;
        }
        if (!PATRON_TELEFONO.test(valor)) {
            mostrarError(errorTelefono, 'El teléfono no es válido');
            return false;
        }
        limpiarError(errorTelefono);
        return true;
    }

    //Validación en tiempo real
    nombreInput.addEventListener('input', () => {
        validarNombre();
        mensajeFinal.textContent = '';
    });
    correoInput.addEventListener('input', () => {
        validarCorreo();
        mensajeFinal.textContent = '';
    });
    telefonoInput.addEventListener('input', () => {
        validarTelefono();
        mensajeFinal.textContent = '';
    });

    //Validación al enviar
    formulario.addEventListener('submit', e => {
        e.preventDefault();

        const nombreValido = validarNombre();
        const correoValido = validarCorreo();
        const telefonoValido = validarTelefono();

        if (nombreValido && correoValido && telefonoValido) {
            formulario.reset();
            mensajeFinal.textContent = 'Formulario completado con éxito';
        }
    });
});
