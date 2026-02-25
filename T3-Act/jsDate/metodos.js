//FORMAS DE CRAR OBJETOS
const ahora = new Date(0)
console.log(ahora);
console.log(ahora.getDay());
const ahoraMili = Date.now()
console.log(ahoraMili);

console.log("--fecha en milisegundos--")
const milisegundos = new Date(0)
console.log(milisegundos);

console.log("--fecha en texto--")
const fechaTexto = new Date("2025-1-21")
console.log(fechaTexto);

console.log("--fecha en numeros--")
const fechaNumeros = new Date(2022,2,1,2,3)
console.log(fechaNumeros);

//METODOS

console.log(`Hoy es ${ahora.getFullYear()}/${ahora.getMonth()+1}/${ahora.getDate()} `);
console.log(`La hora exacta en ${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`);

//calculos don date

const inicio = new Date(2025,2,11,18,0)
const fin = new Date(2025,2,11,18,45)

const minutos = (fin - inicio)/60000;
console.log(`El tiempo total es: ${minutos}`);

//fechas legibles

console.log(ahora.toDateString());
console.log(ahora.toLocaleDateString());


