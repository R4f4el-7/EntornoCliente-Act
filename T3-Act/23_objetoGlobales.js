/*Crear un pequeño script que:

Muestre un mensaje de bienvenida con alert().
Detecte el idioma del usuario con navigator.language.
Muestre en consola la URL actual (location.href).
Cambie el título del documento para mostrar “Torneo de Ajedrez Online”.
Mostrar también el tamaño de la ventana con innerWidth e innerHeight.
Cambiar el fondo del documento según el idioma (por ejemplo, bandera).
Realízalo paso a paso, para que cada línea que interactúa  con el navegador te da un “superpoder”.
Especificaciones buenas prácticas:

Uso de constantes (const) para valores no modificables.
Detección segura de idioma con navigator.language.
Feedback visual con console.log() y alert() (dualidad útil en docencia).
No abusar de pop-ups (en fases posteriores, sustituir por elementos HTML dinámicos).*/

alert("Bienvenido!")

const idiomaUsuario = navigator.language
 if(idiomaUsuario.startsWith("es")){
     alert("Idioma español")
 }else if(idiomaUsuario.startsWith("en")){
     alert("Idioma ingles")
 }

 const url = location.href;
console.log(`La URL es: ${url}`)

document.title = "Torneo de Ajedrez";
const titulo = document.title;
 alert(`El titulo es: ${titulo}`)

const alturaVentana = window.innerHeight
const anchoVentana = window.innerWidth
console.log(`La altura de la ventana es de ${alturaVentana} `);
console.log(`El ancho de la ventana es de ${anchoVentana} `);

// --- 6. Cambiar fondo según idioma (superpoder: personalización visual) ---

if (idiomaUsuario.startsWith("es")) {
    document.body.style.backgroundColor = "#c60b1e"; // rojo (España)
    console.log("Fondo configurado para idioma español");
} else if (idiomaUsuario.startsWith("en")) {
    document.body.style.backgroundColor = "#012169"; // azul (inglés)
    console.log("Fondo configurado para idioma inglés");
} else {
    document.body.style.backgroundColor = "#444"; // neutro
    console.log("Fondo neutro aplicado");
}




