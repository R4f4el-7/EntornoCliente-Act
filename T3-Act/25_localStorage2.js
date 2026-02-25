/*Pida el nombre del jugador con prompt().
Guarde el nombre en localStorage.
Cada vez que se recargue la página:
Si existe el nombre, muestre un mensaje de bienvenida.
Si no existe, lo pida y lo guarde.
Añadir un contador de partidas jugadas (guardado también en localStorage).
Permitir al jugador “reiniciar su perfil” con localStorage.clear().
Añadir fecha y hora del último inicio de sesión usando Date.
Guardar el color de las piezas elegido (blancas/negras).
Guardar el turno actual mientras la pestaña esté abierta
Recuperar el turno durante la partida
Crear un perfil avanzado con avatar y estadísticas (guardado como objeto JSON).
Especificaciones buenas prácticas:

Principio	Aplicación
Control de flujo claro	Cada paso del proceso está delimitado
Uso de const y let	Variables declaradas con intención semántica
Validación de entradas	Evita valores vacíos o nulos
Persistencia controlada	localStorage solo guarda datos útiles
Feedback visual	Mensajes informativos, amigables y consistentes
*/
if (confirm("¿Quiere reiniciar su perfil?")) {
    localStorage.clear();
}

let nombreGuardado = localStorage.getItem('nombreGuardado') || "";

if (nombreGuardado) {
    alert(`Bienvenido ${nombreGuardado}`);
} else {
    const nombre = prompt("Nombre: ") || "usuario";
    localStorage.setItem('nombreGuardado', nombre);
}

// Contador persistente
let contador = parseInt(localStorage.getItem('contadorGuardado')) || 0;
contador++;
localStorage.setItem('contadorGuardado', contador.toString());

// Fecha de sesión
const inicio = new Date();
localStorage.setItem('inicioGuardado', inicio.toString());
alert(`Sesión iniciada: ${inicio}`);

// Color
let color = prompt("¿Blancas o negras?") || "blancas";
localStorage.setItem('color', color);

// sessionstoreage

let turno = sessionStorage.getItem("turno");
if (!turno) {
    turno = "blancas"
    sessionStorage.setItem("turno", turno);
}
console.log(turno);
if(confirm("¿Quieres cambiar turno?")){
    if(turno === "blancas"){
        turno = "negras"
    }else{
        turno = "blancas"
    }
    sessionStorage.setItem("turno", turno);
}
console.log(turno);

//
let perfil = JSON.parse(localStorage.getItem("perfil"));
if (!perfil) {
    estadistica = {
        nombre,
        partidas:2
    };
    localStorage.setItem("perfil", JSON.stringify(estadistica));
    perfil = estadistica;
}
console.log("Perfil: ");
console.log(perfil.nombre);
console.log(perfil.partidas);