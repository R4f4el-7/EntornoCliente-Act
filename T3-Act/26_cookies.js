/*Guardar y recordar el tema del tablero (oscuro o claro) mediante cookies.
Añadir una cookie con la última pieza movida (ultimaPieza=Caballo; expires=7d).
Mostrar la fecha de la última visita en un alert usando una cookie "ultimaVisita".
Combinar cookies + localStorage para recordar preferencias globales y estadísticas.
Botón “Restablecer preferencias”
    Borrar cookies y localStorage y recargar la página.
Persistir idioma preferido
    Guardar "idioma=es" o "idioma=en" y personalizar los textos.
Especificaciones buenas prácticas:

Principio	Aplicación
Código modular	Funciones claras: setCookie, getCookie
Seguridad básica	Datos codificados con encodeURIComponent
UX intuitiva	Confirmaciones y mensajes claros
Persistencia controlada	Duración definida en días
Accesibilidad visual	Colores contrastantes claros/oscuros*/
//funciones cookies
function setCookie (nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
    const expires = "expires=" + fecha.toUTCString();
    document.cookie = `${nombre}=${encodeURIComponent(valor)}; ${expires}; path=/`;
}
function getCookie (nombre) {
    const nombreEQ = `${nombre}=`;
    const cookies = document.cookie.split(';');

    for (let c of cookies) {
        c = c.trim()
        if(c.startsWith(nombreEQ)) {
            return decodeURIComponent(c.substring(nombreEQ.length));
        }
    }
    return null;
}
function borrarCookies() {
    const origen = new Date(0)
    for (let c of document.cookie.split(';')) {
        const nombre = c.split('=')[0]
        document.cookie = `${nombre}=;expires=${origen.toUTCString()}; path=/`;
    }
}
//Tema
const tema = getCookie('tema')
if (tema) {
    alert(`El tema guardado es: ${tema}`);
}
if (confirm('¿Quieres nuevo tema?')){
    const nuevoTema = prompt(`Nuevo tema: `) || 'claro'
    setCookie('tema', nuevoTema, 7);
}
//caballo
const ultimaPieza = getCookie('UltimaPieza');
if (ultimaPieza) {
    alert(`El ultima Pieza es: ${ultimaPieza}`);
}
setCookie('UltimaPieza', `caballo`, 7);

//visita
const ultima = getCookie('ultimaVisita');
if (ultima) {
    alert(`Tu ultima visita fue ${ultima}`);
}
const fecha = new Date();
setCookie('ultimaVisita', fecha.toUTCString(), 7);
//cookies + localstorage
let estadistica = JSON.parse(localStorage.getItem('estadistica')) || {
    visitas: 0,
    ultimoTema: tema,
    ultimaFecha: fecha.toUTCString()
};

estadistica.visitas++;
estadistica.ultimoTema = tema;
estadistica.ultimaFecha = fecha.toUTCString();

localStorage.setItem('estadistica', JSON.stringify(estadistica));

//reestablecer
if(confirm(`Restablecer preferencias`)){
    localStorage.clear();
    borrarCookies()
    location.reload()
}

//idioma
const idioma = getCookie('idioma') || "";
if (idioma.startsWith('es')) {
    alert(`El idioma: ${idioma}`);
}else if (idioma.startsWith('en')) {
    alert(`Language: ${idioma}`);
}
setCookie('idioma', navigator.language.startsWith('es') ? 'es' : 'en', 7)