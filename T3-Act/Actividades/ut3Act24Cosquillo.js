/*Crear un pequeño script que:

Pida al jugador su nombre con prompt().
Pregunte si quiere comenzar la partida con confirm().
Si acepta, muestre un mensaje con alert() indicando:
"Comienza la partida, [nombre] con las blancas."
Si cancela, muestre: "El jugador [nombre] ha pospuesto la partida."
Añadir selección de dificultad (prompt("Elige nivel: fácil, medio o difícil")).
Guardar el nombre y dificultad en localStorage para reutilizarlos en la siguiente visita.*/

let nombre_jugador = prompt("Nombre de jugador: ");

if(confirm("¿Quieres empezar la partida?")){
    alert("Comienza la partida "+nombre_jugador+" con las blancas");
}else{
    alert("El jugador "+nombre_jugador+" ha pospuesto la partida");
}

let dificultad = prompt("Elige nivel: fácil, medio o difícil ");

//Guardar en localStorage para la próxima visita
localStorage.setItem("nombre", nombre_jugador);
localStorage.setItem("dificultad", dificultad);

