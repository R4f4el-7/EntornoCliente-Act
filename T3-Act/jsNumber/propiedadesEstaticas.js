const texto = "8"
const numero = Number(texto);
const entero = parseInt(texto);
const decimal = parseFloat(texto);


let num = 123.456;

console.log(num.toString());       // "123.456"
console.log(num.toFixed(2));       // "123.46"
console.log(num.toExponential());  // "1.23456e+2"
console.log(num.toPrecision(4));   // "123.5"
console.log(num.valueOf());        // 123.456

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

const maxMovimientos = Number.MAX_VALUE;
console.log(`La cantidad maxima de movimiento es: ${maxMovimientos}`);