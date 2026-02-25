/*Guardar y recordar el tema del tablero (oscuro o claro) mediante cookies.
Añadir una cookie con la última pieza movida (ultimaPieza=Caballo; expires=7d).
Mostrar la fecha de la última visita en un alert usando una cookie "ultimaVisita".
Combinar cookies + localStorage para recordar preferencias globales y estadísticas.
Botón “Restablecer preferencias”
    Borrar cookies y localStorage y recargar la página.
Persistir idioma preferido
    Guardar "idioma=es" o "idioma=en" y personalizar los textos*/

//Crear una cookie
function setCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
    const expiracion = "expires=" + fecha.toUTCString();
    document.cookie = `${nombre}=${encodeURIComponent(valor)}; ${expiracion}; path=/`;
}

//Leer una cookie
function getCookie(nombre) {
    const nameEQ = nombre + "=";
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(nameEQ)) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

//Borrar una cookie
function deleteCookie(nombre) {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

//Añadir una cookie con la última pieza
setCookie("ultimaPieza", "caballo", 7);
alert("Moviste la pieza: Caballo");

//Ultima visita
const ultimaVisita = getCookie("ultimaVisita");
if (ultimaVisita){
    alert(`Última visita: ${ultimaVisita}`);
} else{
    setCookie("ultimaVisita", new Date().toLocaleString(), 30);
}
//Combinar cookies + localStorage
const localMovimiento = getCookie("ultimaPieza");
localStorage.setItem("PiezaMovimiento", localMovimiento);

//Borrar cookies y localStorage y recargar la página.
if(confirm("¿Quieres borrar cookies y localstorage?")){
    deleteCookie("ultimaPieza");
    localStorage.clear();
    alert("Se ha borrado correctamente.");
}
