//arrays basico
let piezas = ["peon", "dama", "rey"]
console.log(piezas[5]);
piezas.unshift("hola");
console.log(piezas);
console.log("Elimina la palabra: "+piezas.shift());
console.log(piezas);
//arrays intermedio buscar, ordenar, iterar
let piezasIn = ["peon", "dama", "rey", "torre", "rey"]
//---BUSCAR---
console.log(piezasIn.indexOf("rey")); //indice del primero
console.log(piezasIn.lastIndexOf("rey"));//indice del ultimo
console.log(piezasIn.includes("rey"));
//---ORDENAR---
let jugadores = ["Leon","Ashley","Buho","Salazar","Alen"]
jugadores.sort()
console.log(jugadores);

let numeros = [ 8, 20, 3, 15]
console.log(numeros.sort((a,b) => a - b));

console.log(numeros.reverse());
//---RECORRER---
let movimientos = ["e1", "d2", "c3"]
console.log('---for clasico---');
for(let i = 0; i < movimientos.length; i++){
    console.log(movimientos[i]);
}
console.log('---for of---');
for(let valor of movimientos){
    console.log(valor);
}
console.log('---forEach---');
movimientos.forEach(movimiento => {
    console.log(movimiento);
})
//Operaciones agregadas
//---MAP---
let tiempos = [ 10, 20, 30]
let tiempoX2 = tiempos.map(t => t * 2);//no modifica la original
console.log(tiempoX2);
console.log(tiempos);
//---FILTER---
let jugadas = ["d2","g5","e4","h2"]
let jugadas2 =jugadas.filter(j => j.includes("2"))
console.log(jugadas2);
//--REDUCE---Acumula todos los valores en un único resultado.
let num = [10,30,20]
let total = num.reduce((a, b) => a + b, 0);
console.log(total);

console.log(`Maximo: ${Math.max(...num)}`);
console.log(`Minimo: ${Math.min(...num)}`);
