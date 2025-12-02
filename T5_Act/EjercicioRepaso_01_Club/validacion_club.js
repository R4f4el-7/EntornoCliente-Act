document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formClub');

    //mostrar errores
    function mostrarError(id, mensaje) {
        document.getElementById(id).textContent = mensaje;
    }
    //limpiar errores previos
    function limpiarError() {
        document.querySelectorAll('.error').forEach(e => e.textContent = '')
    }

    //patrones
    const patron_nombre =/^[a-zA-Z ]+$/
    const patron_correo = /^[\w.-]+@[\w.-]+\.[a-zA-Z ]{2,}$/
    const patron_telefono = /^[0-9]{9}$/

    //validacion de nombre
    function validarNombre() {
        const nombre = document.getElementById('nombre').value.trim();
        if(!nombre){
            mostrarError("errorNombre","El nombre es requerido");
            return false;
        }else if(!patron_nombre.test(nombre)){
            mostrarError("errorNombre","El nombre no es valido");
            return false;
        }
        mostrarError("errorNombre","");
        return true;
    }

    //validacion de correo
    function validarCorreo(){
        const correo = document.getElementById('correo').value.trim();
        if(!correo){
            mostrarError("errorCorreo","El correo es requerido");
            return  false;
        }else if(!patron_correo.test(correo)){
            mostrarError("errorCorreo","El correo no es valido");
            return  false;
        }
        mostrarError("errorCorreo","");
        return true;
    }

    //validacion de telefono
    function validarTelefono(){
        const telefono = document.getElementById('telefono').value.trim();
        if (!telefono){
            mostrarError("errorTelefono","El telefono es requerido");
            return false;
        }else if(!patron_telefono.test(telefono)){
            mostrarError("errorTelefono","El telefono no es valido");
            return false;
        }
        mostrarError("errorTelefono","");
        return true;
    }
    //validar a tiempo real input
    document.getElementById('nombre').addEventListener('input', () => {
        validarNombre();
        document.getElementById('mensajeFinal').textContent = '';
    });
    document.getElementById('correo').addEventListener('input', () => {
        validarCorreo();
        document.getElementById('mensajeFinal').textContent = '';
    });
    document.getElementById('telefono').addEventListener('input', () => {
        validarTelefono();
        document.getElementById('mensajeFinal').textContent = '';
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        limpiarError();

        const nombre_valido = validarNombre();
        const correo_valido = validarCorreo();
        const telefono_valido = validarTelefono();

        if (nombre_valido && correo_valido && telefono_valido){
            formulario.reset();
            document.getElementById('mensajeFinal').textContent = "Formulario completado con exito";
        }

    })
})