/*Modifica el formulario del mini-proyecto UT4 (registro de jugadores):​

Añade validación con pattern y required.​
Implementa validación JS adicional al evento submit.​
Muestra los mensajes de error en un <p> debajo de cada campo usando textContent.​
Prueba el flujo completo con preventDefault() y DOMContentLoaded.*/
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formJugador');
    formulario.addEventListener('submit', e => {
        e.preventDefault();

        //Valores submit
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const elo = document.getElementById('elo').value;

        //Patrones
        const patron_nombre = /[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,30}/
        const patron_correo = /^[\w-]+@[\w-]+\.[A-Za-z]{2,}$/
        const validar_elo = Number(elo);

        //Limpiar errores previos
        document.getElementById('errorNombre').textContent = '';
        document.getElementById('errorCorreo').textContent = '';
        document.getElementById('errorElo').textContent = '';
        document.getElementById('mensajeExito').textContent = '';

        let valido = true;

        // Validaciones
        if(!patron_nombre.test(nombre.trim())) {
            document.getElementById('errorNombre').textContent = "Error en el nombre";
            valido = false;
        }
        if(!patron_correo.test(correo.trim())) {
            document.getElementById('errorCorreo').textContent = "Error en el correo";
            valido = false;
        }
        if (isNaN(validar_elo) || validar_elo < 800 || validar_elo > 3000) {
            document.getElementById('errorElo').textContent = "Error en el ELO";
            valido = false;
        }

        // Mensaje de éxito
        if(valido) {
            document.getElementById('mensajeExito').textContent = "Jugador registrado correctamente";
            formulario.reset();
        }
    })
})