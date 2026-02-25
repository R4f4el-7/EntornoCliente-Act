//Crea un array con piezas capturadas, cada una con su tipo y valor.
const capturas = [
    { tipo: "Peón", valor: 1 },
    { tipo: "Caballo", valor: 3 },
    { tipo: "Alfil", valor: 3 },
    { tipo: "Torre", valor: 5 },
    { tipo: "Dama", valor: 9 },
    { tipo: "Peón pasado", valor: 2 },
    { tipo: "Caballo central", valor: 4 },
    { tipo: "Alfil fianchetto", valor: 3.5 },
    { tipo: "Torre doblada en columna abierta", valor: 6 },
    { tipo: "Peón en séptima fila", valor: 3 }
];
//Total de piezas capturadas
console.log("Total de piezas capturadas:", capturas.length);
//Valor total acumulado.
const valorTotal = capturas.reduce((acc, j) => acc + j.valor,0);
console.log(valorTotal);
//Piezas más valiosas (filtradas)
const piezasFiltradas = capturas.filter(j => j.valor > 5);
console.log(piezasFiltradas);