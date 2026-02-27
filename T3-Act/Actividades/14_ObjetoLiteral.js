//objeto literal - Porque está creado literalmente escribiendo sus claves y valores dentro de { }
const piezas = {"peon" : 1, "caballo" : 3, "alfil" : 3, "torre" : 5, "dama" : 9};

let total =  piezas.peon + piezas.caballo + piezas.alfil;

console.log(total.toFixed(1));
console.log(piezas.caballo);
console.log(piezas["caballo"]);