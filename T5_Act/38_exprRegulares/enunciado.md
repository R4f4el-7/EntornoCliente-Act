Objetivo:
Ampliar el formulario del de la Actividad anterior (registro de jugadores y partidas) incorporando:
    Validaciones personalizadas con JavaScript.
    Uso de eventos del formulario (submit, change, input, DOMContentLoaded).
    Uso de expresiones regulares para comprobar campos.
    Mostrar mensajes de error dinámicos y mensajes de confirmación.
    Guardar datos validados en localStorage.
Requisitos:
    Crea un formulario con los siguientes campos:
        Nombre del jugador blancas (obligatorio, letras y espacios, mínimo 3 caracteres)
        Nombre del jugador negras (obligatorio, letras y espacios, mínimo 3 caracteres, distinto al anterior)
        Color elegido (radio, obligatorio)
        Resultado (select: “Ganan blancas”, “Ganan negras”, “Tablas”)
        Email de contacto (obligatorio, válido según expresión regular)
        Fecha de partida (obligatorio, no puede ser futura)
        Comentario (textarea, opcional, máximo 200 caracteres)
    Usa novalidate en el formulario para gestionar toda la validación desde JavaScript.
    Implementa validaciones personalizadas en el evento submit:
        Usa preventDefault() para evitar envío si hay errores.
        Muestra mensajes de error con textContent en un <p class="error"> debajo de cada campo.
        Si todos los campos son correctos:
            Guarda la partida en localStorage (como en el mini-proyecto UT4).
            Limpia el formulario.
            Muestra un mensaje de confirmación.
    Usa al menos una expresión regular para validar:
        Nombre del jugador.
        Email.
        Comentarios
    Usa los eventos DOMContentLoaded, change y input para mejorar la experiencia de validación.
    Documenta el código y comenta cada función con su propósito.