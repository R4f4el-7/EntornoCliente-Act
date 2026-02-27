/*Crea un array con piezas capturadas, cada una con su tipo y valor.
Calcula:
Total de piezas capturadas.
Valor total acumulado.
Piezas más valiosas (filtradas).
Muestra un resumen en consola con reduce() y filter().
Ejemplo base(tienes que ampliarlo a 10 capturas):*/

const capturas = [
    { tipo: "Peón", valor: 1 },
    { tipo: "Alfil", valor: 3 },
    { tipo: "Dama", valor: 9 },
    { tipo: "Torre", valor: 5 }
];

//Total de piezas capturadas
console.log("Total de piezas capturadas:", capturas.length);
//Valor total acumulado.
const valorTotal = capturas.reduce((acc, j) => acc + j.valor,0);
console.log(valorTotal);
//Piezas más valiosas (filtradas)
const piezasFiltradas = capturas.filter(j => j.valor > 5);
console.log(piezasFiltradas);
