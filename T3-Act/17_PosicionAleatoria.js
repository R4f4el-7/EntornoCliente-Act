/*
Crea un array con las piezas principales: ["rey", "reina", "torre", "alfil", "caballo", "peón", "torre", "alfil"]

Genera una posición aleatoria por pieza.

Muestra por consola el resultado.

Especificaciones Buenas prácticas:
Uso de forEach para claridad.
Retornar datos estructurados (objetos).
console.table() mejora la legibilidad del resultado.
Comenta y documenta tu código*/
const piezas = ["rey", "reina", "torre", "alfil", "caballo", "peón", "torre", "alfil"];

function posicionAleatoria() {
    return {
        fila: Math.ceil(Math.random()*8)+1,
        columna : Math.ceil(Math.random()*8)+1
    }
}
 function colocarPiezas(piezas){
    const resultado = []

    piezas.forEach(pieza => {
        const posicion = posicionAleatoria()
        resultado.push({
            fila: posicion.fila,
            columna: posicion.columna,
            pieza: pieza
        });
    })
     return resultado
 }
 const posicionPiezas = colocarPiezas(piezas)

console.table(posicionPiezas)
console.log(posicionPiezas)

posicionPiezas.forEach(posicionPieza => {
    console.log("----------")
    for(let clave in posicionPieza){
        console.log(clave, posicionPieza[clave])
    }
})