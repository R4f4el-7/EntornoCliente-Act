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
        campo.addEventListener("input", () => limpiarErrores());
        campo.addEventListener("change", () => limpiarErrores());
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        //valores del submit
        const jugadorBlancas = document.getElementById('jugadorBlancas').value.trim();
        const jugadorNegras = document.getElementById('jugadorNegras').value.trim();
        const color = document.querySelector('input[name="color"]:checked');
        const resultado = document.getElementById('resultado').value;
        const email = document.getElementById('email').value.trim();
        const fecha = document.getElementById('fecha').value;
        const comentario = document.getElementById('comentario').value.trim();

        //patrones
        const patron_jugador = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]{3,}$/
        const patron_email = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/
        const patron_comentario = /^.{0,200}$/; // cualquier cosa hasta 200 chars

        //Limìar errores previos
        limpiarErrores();

        //validar formulario
        let valido = true;

        //validar jugadorBlancas obligatorio + patrón
        if (!jugadorBlancas) {
            mostrarError("errBlancas", "El nombre es obligatorio");
            valido = false;
        } else if (!patron_jugador.test(jugadorBlancas)) {
            mostrarError("errBlancas", "Nombre no válido. Mínimo 3 letras.");
            valido = false;
        }

        //validar jugadorNegras obligatorio + patrón + distinto
        if (!jugadorNegras) {
            mostrarError("errNegras", "El nombre es obligatorio");
            valido = false;
        } else if (!patron_jugador.test(jugadorNegras)) {
            mostrarError("errNegras", "Nombre no válido");
            valido = false;
        } else if (jugadorNegras === jugadorBlancas) {
            mostrarError("errNegras", "Debe ser distinto al jugador de blancas");
            valido = false;
        }

        //validar color
        if (!color) {
            mostrarError("errColor", "Debe elegir un color");
            valido = false;
        }

        //validar resultado
        if (resultado === "") {
            mostrarError("errResultado", "Debe elegir un resultado");
            valido = false;
        }

        //validar email obligatorio + patron
        if (!email) {
            mostrarError("errEmail", "El email es obligatorio");
            valido = false;
        } else if (!patron_email.test(email)) {
            mostrarError("errEmail", "Formato de email no válido");
            valido = false;
        }

        //validar fecha obligatoria + no ser fecha futura
        if (!fecha) {
            mostrarError("errFecha", "La fecha es obligatoria");
            valido = false;
        } else {
            const hoy = new Date();
            hoy.setHours(0, 0, 0, 0);

            const fechaPartida = new Date(fecha);

            if (fechaPartida > hoy) {
                mostrarError("errFecha", "La fecha no puede ser futura");
                valido = false;
            }
        }

        //validar comentario
        if(!patron_comentario.test(comentario)){
            mostrarError("errComentario", "Máximo 200 caracteres");
            valido = false;
        }


        if (valido) {
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