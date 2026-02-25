const texto = "texto1"
const numeros = [1,2,3,4,5,1]
console.log(texto.toUpperCase());
console.log("---Slice---");
console.log(texto.slice(0,2));
console.log(numeros.slice(0,2));

console.log("---Replace---");
console.log(texto.replace("t","a"));

console.log("---Includes---");
console.log(texto.includes("t"));
console.log(numeros.includes(22));

console.log("---indexOf---");
console.log(texto.indexOf("ex"));
console.log(numeros.indexOf(3));

console.log("---repeat---");
console.log(texto.repeat(2));

console.log("---startsWith---");
console.log(texto.startsWith("tex"));

console.log("---endsWith---");
console.log(texto.endsWith("1"));