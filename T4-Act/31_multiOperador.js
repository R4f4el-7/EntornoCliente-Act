/*Crea un programa que combine todo lo visto:

Registra las jugadas en un array.
Usa filter() para obtener solo las capturas (jugadas con “x”).
Usa map() para numerarlas: ["1. e4", "2. e5", "3. Cf3", ...].
Usa reduce() para contar cuántas jugadas totales hubo.
Muestra el resumen en consola:
Jugadas totales: 12
Capturas: 3
Media por jugador: 6*/
const jugadas = ["e4","e5","Cf3","Cc6","Axc6","dxc6","Cxe5","Dxd1+","Rxd1","dxe6#"];

const jugadasFiltrada = jugadas.filter(j => j.includes("x"))
console.log(jugadasFiltrada);

const jugadasMap = jugadas.map((jugada,index) => `${index+1}. ${jugada}`)
console.log(jugadasMap);

const total = jugadasMap.reduce((acc) => acc + 1,0);
console.log(total);

const media = total/2
console.log(media)

console.log("----Con objetos----");
//NIVEL INTERMEDIO
/*Pida cuántas jugadas se van a registrar.
Por cada jugada, solicite:
    El nombre del jugador.
    El movimiento realizado.
    Guarde cada jugada como un objeto dentro de un array.
Muestre:
    El total de jugadas.
    Cuántas jugadas hizo cada jugador.
    Cuántas capturas hizo cada jugador.
    El listado completo numerado.*/
const jugadas2 = [
    { jugador: "Ana", mov: "e4" },
    { jugador: "Luis", mov: "e5" },
    { jugador: "Ana", mov: "Axc6" },
    { jugador: "Luis", mov: "dxc6" }
];

const totalJugadas = jugadas2.reduce((acc) => acc + 1,0);
let jugadasJugador = jugadas2.reduce((acc,j) => {
   const jugador = j.jugador;
   if(acc[jugador]){
       acc[jugador] += 1;
   }else{
       acc[jugador] = 1;
   }
   return acc;
},{});
let capturasJugador = jugadas2.reduce((acc, j) => {
    const jugador = j.jugador;
    if(j.mov.includes("x")){
        if(acc[jugador]){
            acc[jugador] += 1;
        }else{
            acc[jugador] = 1;
        }
    }
    return acc;
},{})
const listadoNumerado = jugadas2.map((jugador,index) => {
    return `${(index+1)}. ${jugador.jugador}`
})


console.log(`Total jugadas ${totalJugadas}`);
console.log(`Jugadas por jugador: ${JSON.stringify(jugadasJugador)}`);
console.log(`Capturas por jugador: ${JSON.stringify(capturasJugador)}`);
console.log(`Listado numerado: ${listadoNumerado}`);