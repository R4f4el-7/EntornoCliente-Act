/*Crear un pequeño script que:

Muestre un mensaje de bienvenida con alert().
Detecte el idioma del usuario con navigator.language.
Muestre en consola la URL actual (location.href).
Cambie el título del documento para mostrar “Torneo de Ajedrez Online”.
Mostrar también el tamaño de la ventana con innerWidth e innerHeight.
Cambiar el fondo del documento según el idioma (por ejemplo, bandera).*/

alert("Bienvenido")
alert("Idioma: "+navigator.language)
alert("URL: "+location.href);
document.title = "Torneo de Ajedrez Online";
alert("Titulo: "+document.title);
alert("Ancho: "+window.innerWidth);
alert("Altura: "+window.innerHeight);

// Cambiar el fondo según el idioma
let idioma = navigator.language;

if (idioma.startsWith("es")) {
    document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg')";
} else if (idioma.startsWith("en")) {
    document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg')";
} else if (idioma.startsWith("fr")) {
    document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg')";
} else {
    document.body.style.backgroundColor = "#cccccc"; // fondo neutro si no coincide
}

document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center"