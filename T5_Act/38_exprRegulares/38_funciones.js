document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById('formTorneo');
    //función para mostrar errores
    function mostrarError(id, mensaje) {
        document.getElementById(id).textContent = mensaje;
    }

    //función para limpiar errores
    function limpiarErrores() {
        document.querySelectorAll(".error").forEach(e => e.textContent = "");
    }

    //función para guardar en localStorage
    function guardarPartida(partida) {
        const partidas = JSON.parse(localStorage.getItem("partidas")) || [];
        partidas.push(partida);
        localStorage.setItem("partidas", JSON.stringify(partidas));
    }

    //eventos para validación inmediata
    document.querySelectorAll("input, textarea, select").forEach(campo => {
        campo.addEventListener("input", () => {
            limpiarErrores();
            document.getElementById('mensajeFinal').textContent = '';
        });
        campo.addEventListener("change", () => {
            limpiarErrores();
            document.getElementById('mensajeFinal').textContent = '';
        });
    });

    //patrones
    const patron_jugador = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]{3,}$/
    const patron_email = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/
    const patron_comentario = /^.{0,200}$/;

    //funcion validar jugadorBlancas obligatorio + patrón
    function validarBlancas() {
        const jugadorBlancas = document.getElementById('jugadorBlancas').value.trim();
        if (!jugadorBlancas) {
            mostrarError("errBlancas", "El nombre es obligatorio");
            return false;
        } else if (!patron_jugador.test(jugadorBlancas)) {
            mostrarError("errBlancas", "Nombre no válido. Mínimo 3 letras.");
            return false;
        }
        mostrarError("errBlancas","")
        return true;
    }
    //funcinon validar jugadorNegras obligatorio + patrón + distinto
    function validarNegras(){
        const jugadorNegras = document.getElementById('jugadorNegras').value.trim();
        const jugadorBlancas = document.getElementById('jugadorBlancas').value.trim();

        if (!jugadorNegras) {
            mostrarError("errNegras", "El nombre es obligatorio");
            return  false;
        } else if (!patron_jugador.test(jugadorNegras)) {
            mostrarError("errNegras", "Nombre no válido");
            return  false;
        } else if (jugadorNegras === jugadorBlancas) {
            mostrarError("errNegras", "Debe ser distinto al jugador de blancas");
            return false;
        }
        mostrarError("errNegras", "");
        return true;
    }
    //funcion validar color
    function validarColor(){
        const color = document.querySelector('input[name="color"]:checked');
        if (!color) {
            mostrarError("errColor", "Debe elegir un color");
            return  false;
        }
        mostrarError("errColor", "");
        return true;
    }
    //funcion validar resultado obligatorio
    function validarResultado(){
        const resultado = document.getElementById('resultado').value;
        if (resultado === "") {
            mostrarError("errResultado", "Debe elegir un resultado");
            return  false;
        }
        mostrarError("errResultado", "");
        return true;
    }
    //funcion validar email obligatorio + patron
    function validarEmail(){
        const email = document.getElementById('email').value.trim();
        if (!email) {
            mostrarError("errEmail", "El email es obligatorio");
            return  false;
        } else if (!patron_email.test(email)) {
            mostrarError("errEmail", "Formato de email no válido");
            return  false;
        }
        mostrarError("errEmail", "");
        return true;
    }
    //funcion validar fecha obligatoria + no ser futura
    function validarFecha(){
        const fecha = document.getElementById('fecha').value;
        if (!fecha) {
            mostrarError("errFecha", "La fecha es obligatoria");
            return  false;
        } else {
            const hoy = new Date();
            hoy.setHours(0, 0, 0, 0);

            const fechaPartida = new Date(fecha);

            if (fechaPartida > hoy) {
                mostrarError("errFecha", "La fecha no puede ser futura");
                return  false;
            }
        }
        mostrarError("errFecha", "");
        return true;
    }
    //funcion validar comentario
    function validarComentario(){
        const comentario = document.getElementById('comentario').value.trim();
        if(!patron_comentario.test(comentario)){
            mostrarError("errComentario", "Máximo 200 caracteres");
            return false;
        }
        mostrarError("errComentario", "");
        return true;
    }

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        limpiarErrores();

        const blancasValido = validarBlancas();
        const negrasValido = validarNegras();
        const colorValido = validarColor();
        const resultadoValido = validarResultado();
        const emailValido = validarEmail();
        const fechaValido = validarFecha();
        const comentarioValido = validarComentario();

        if (blancasValido && negrasValido && colorValido && resultadoValido && fechaValido && comentarioValido && emailValido) {
            const jugadorBlancas = document.getElementById('jugadorBlancas').value.trim();
            const jugadorNegras = document.getElementById('jugadorNegras').value.trim();
            const color = document.querySelector('input[name="color"]:checked');
            const resultado = document.getElementById('resultado').value;
            const email = document.getElementById('email').value.trim();
            const fecha = document.getElementById('fecha').value;
            const comentario = document.getElementById('comentario').value.trim();

            const nuevaPartida = {
                jugadorBlancas,
                jugadorNegras,
                color: color.value,
                resultado,
                email,
                fecha,
                comentario
            };

            guardarPartida(nuevaPartida);

            formulario.reset();
            document.getElementById('mensajeFinal').textContent = 'El formulario ha sido un exito';
        }

    })
})