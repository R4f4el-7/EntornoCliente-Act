/*Crea una función historial(pieza, casilla).
Guarda cada jugada en un array de strings.
Usa join("\n") para mostrar el historial.
Usa métodos de string para formatear cada línea.
Ejemplo de salida:
1. REINA A D4
2. CABALLO A F3
3. ALFIL A C5*/
const historial = []

function registrarJugada(pieza, casilla){
    const contador = historial.length + 1;
    historial.push(`${contador}. ${pieza} a ${casilla}`.toUpperCase())
}

registrarJugada("Reina", "d4")
registrarJugada("caballo", "f3")
registrarJugada("alfil", "c5")

console.log(historial.join("\n"))