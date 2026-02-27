/*Pida al jugador su nombre con prompt().
Pregunte si quiere comenzar la partida con confirm().
Si acepta, muestre un mensaje con alert() indicando:
"Comienza la partida, [nombre] con las blancas."
Si cancela, muestre: "El jugador [nombre] ha pospuesto la partida."
Añadir selección de dificultad (prompt("Elige nivel: fácil, medio o difícil")).
Guardar el nombre y dificultad en localStorage para reutilizarlos en la siguiente visita.
Especificaciones buenas prácticas:

Comprobación de valores nulos o vacíos (!nombreJugador).
Uso del operador || para valores por defecto legibles.
Separación clara de cada paso del flujo.
Mensajes claros, consistentes y personalizados.*/
const nombre = prompt("Nombre: ");

if (!nombre) {
    alert("Nombre no válido");
} else {
    if (confirm("¿Comenzar partida?")) {

        alert(`Comienza la partida, ${nombre} con las blancas`)
        const nivel = prompt("Elige nivel: ") || "medio"

        localStorage.setItem("nombreGuardado", nombre);
        localStorage.setItem("nivelGuardado", nivel);
    } else {
        alert(`El jugador ${nombre} ha propuesto la partida`)
    }

    const nombreGuardado = localStorage.getItem("nombreGuardado") || "";
    const nivelGuardado = localStorage.getItem("nivelGuardado") || "medio";

    console.log(`El nombre es ${nombreGuardado}`);
    console.log(`El nivel es ${nivelGuardado}`);
}