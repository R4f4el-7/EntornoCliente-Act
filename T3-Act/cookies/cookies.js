// Funciones de utilidades para cookies

// Crear una cookie
function crearCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);

    const expires = "expires=" + fecha.toUTCString();

    document.cookie = `${nombre}=${valor}; ${expires}; path=/`;
}

// Leer una cookie
function leerCookie(nombre) {
    const nombreEQ = nombre + "=";
    const cookies = document.cookie.split(";");

    for (let c of cookies) {
        c = c.trim();

        if (c.startsWith(nombreEQ)) {
            return c.substring(nombreEQ.length);
        }
    }

    return null;
}

// Borrar una cookie
function deleteCookie(nombre) {
    const origen = new Date(0)
    document.cookie = `${nombre}=; expires=${origen}; path=/;`;
}

