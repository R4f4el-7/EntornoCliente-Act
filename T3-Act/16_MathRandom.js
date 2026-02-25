/*Crea una función colocarPiezaAleatoria(pieza)

Genera dos números aleatorios entre 1 y 8 (fila y columna).

Muestra la posición generada.*/
function colocarPiezaAleatoria(pieza){
    const fila = Math.floor(Math.random() * 8) + 1;
    const columna = Math.floor(Math.random() * 8) + 1;

    console.log(`La pieza ${pieza} se colocó en la posición (${fila}, ${columna})`);
}
colocarPiezaAleatoria("torre")
