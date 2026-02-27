/*Crea un programa que:

Guarde en un array varias jugadas (algunas repetidas).
Muestre cuántas veces aparece cada jugada.*/
// Array con jugadas (algunas repetidas)
const jugadas = ["e4", "d4", "e4", "Cf3", "e4", "d4", "Cc6"];

let conteo = jugadas.reduce((acc, jugada) => {
   if(acc[jugada]){
       acc[jugada] += 1;
   }else{
       acc[jugada] = 1;
   }
   return acc;
},{})
console.log(conteo);

const jugadasObjetos = [
    {mov: "e4", jugador: "Ana"},
    {mov: "d4", jugador: "Luis"},
    {mov: "e4", jugador: "Ana"},
    {mov: "Cf3", jugador: "Ana"},
    {mov: "e4", jugador: "Luis"}
];

let conteo2 = jugadasObjetos.reduce((acc, jugada) => {
   const mov = jugada.jugador
    if(acc[mov]){
        acc[mov] += 1;
    }else{
        acc[mov] = 1;
    }
    return acc;
},{})
console.log(conteo2);