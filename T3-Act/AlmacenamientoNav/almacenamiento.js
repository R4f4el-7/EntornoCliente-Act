// Importante:
//     • Los valores se guardan siempre como cadenas
// (String).
// • Si queremos guardar objetos, debemos usar
// JSON.stringify() y JSON.parse().

//LOCALSTORAGE
//STRING
const nombreJugador = prompt("Jugador: ");
if(nombreJugador){
    localStorage.setItem("nombreJugador", nombreJugador);
    alert("Jugador: " + nombreJugador);
}

//OBJETO O ARRAY
const jugadorGuardado = localStorage.getItem("nombreJugador");
console.log("El nombre del jugador guardado es: "+jugadorGuardado);

const historial = ["Peon de e2 a d4", "caballo de d3 a f4", "alfil de a1 a b2"]
//guardar en localstorage
localStorage.setItem("historial", JSON.stringify(historial));
//recuperar
const historialGuardado = JSON.parse(localStorage.getItem("historial"));
console.log("Historial: ");
console.log(historialGuardado.join("\n"));
