document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formTorneo');
    const mensajeFinal = document.getElementById('mensajeFinal');

    // 1️⃣ Patrones y constantes
    const PATRON_NOMBRE = /^[a-zA-Z ]+$/;
    const PATRON_EMAIL = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    const MAX_COMENTARIO = 200;

    // 2️⃣ Definición de campos
    const campos = [
        {
            input: document.getElementById('jugadorBlancas'),
            error: document.getElementById('errBlancas'),
            validator: (valor) => {
                if (!valor) return 'Jugador blancas obligatorio';
                if (!PATRON_NOMBRE.test(valor)) return 'Jugador blancas no válido';
                return '';
            }
        },
        {
            input: document.getElementById('jugadorNegras'),
            error: document.getElementById('errNegras'),
            validator: (valor) => {
                if (!valor) return 'Jugador negras obligatorio';
                if (!PATRON_NOMBRE.test(valor)) return 'Jugador negras no válido';
                return '';
            }
        },
        {
            input: document.querySelectorAll('input[name="color"]'),
            error: document.getElementById('errColor'),
            validator: (valores) => {
                const seleccionado = Array.from(valores).some(r => r.checked);
                if (!seleccionado) return 'Debe seleccionar un color';
                return '';
            }
        },
        {
            input: document.getElementById('resultado'),
            error: document.getElementById('errResultado'),
            validator: (valor) => {
                if (!valor) return 'Debe seleccionar un resultado';
                return '';
            }
        },
        {
            input: document.getElementById('email'),
            error: document.getElementById('errEmail'),
            validator: (valor) => {
                if (!valor) return 'Email obligatorio';
                if (!PATRON_EMAIL.test(valor)) return 'Email no válido';
                return '';
            }
        },
        {
            input: document.getElementById('fecha'),
            error: document.getElementById('errFecha'),
            validator: (valor) => {
                if (!valor) return 'Fecha obligatoria';
                return '';
            }
        },
        {
            input: document.getElementById('comentario'),
            error: document.getElementById('errComentario'),
            validator: (valor) => {
                if (valor.length > MAX_COMENTARIO) return `Máximo ${MAX_COMENTARIO} caracteres`;
                return '';
            }
        }
    ];

    // 3️⃣ Función para validar un campo individual
    function validarCampo(campo) {
        let valor;
        if (campo.input instanceof NodeList) {
            // para radio buttons
            valor = campo.input;
        } else {
            valor = campo.input.value.trim();
        }
        const errorMsg = campo.validator(valor);
        campo.error.textContent = errorMsg;
        return errorMsg === '';
    }

    // 4️⃣ Validación en tiempo real
    campos.forEach(campo => {
        if (campo.input instanceof NodeList) {
            campo.input.forEach(radio => {
                radio.addEventListener('input', () => {
                    validarCampo(campo);
                    mensajeFinal.textContent = '';
                });
            });
        } else {
            campo.input.addEventListener('input', () => {
                validarCampo(campo);
                mensajeFinal.textContent = '';
            });
        }
    });

    // 5️⃣ Validación al submit
    form.addEventListener('submit', e => {
        e.preventDefault();
        let todosValidos = true;

        campos.forEach(campo => {
            const valido = validarCampo(campo);
            if (!valido) todosValidos = false;
        });

        if (todosValidos) {
            form.reset();
            mensajeFinal.textContent = 'Partida registrada con éxito';
        }
    });
});
