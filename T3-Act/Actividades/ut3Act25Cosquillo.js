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
Crear un perfil avanzado con avatar y estadísticas (guardado como objeto JSON).*/

let nombre_jugador = prompt("Nombre de jugador: ");

if(nombre_jugador){
    alert("Bienvenido "+nombre_jugador);
    localStorage.setItem("nombre_jugador", nombre_jugador);
}

//------contador jugadas---------
let contador = localStorage.getItem("contador_jugadas");

//Si no existe contador, iniciarlo en 0
if (!contador) {
    contador = 0;
}

//Incrementar en 1 cada vez que se carga la página
contador++;
localStorage.setItem("contador_jugadas", contador);

//---Opción para reiniciar perfil---
if(confirm("¿Reiniciar perfil?")){
    localStorage.clear();
    alert("Tu perfil ha sido reiniciado.");
}
//--------Añadir fecha y hora del ultimo inicio---------
let fecha = new Date();

localStorage.setItem("fecha", fecha);

//--------el color de las piezas elegido------------
let color_pieza = prompt("Color pieza: ");

localStorage.setItem("color_pieza", color_pieza);

//---------turno actual mientras la pestaña esté abierta----------

//-----Perfil----
let perfilAvanzado = {
    nombre: nombre_jugador,
    color: color_pieza,
    partidas_jugadas: contador};

localStorage.setItem("perfil_avanzado", JSON.stringify(perfilAvanzado));

//Mostrar el perfil guardado
let perfilGuardado = JSON.parse(localStorage.getItem("perfil_avanzado"));

alert("Nombre:"+ perfilGuardado.nombre);
alert("Color:"+ perfilGuardado.color);
alert("Partidas jugadas:"+ perfilGuardado.partidas_jugadas);



