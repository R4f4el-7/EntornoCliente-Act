const inicioPartida = new Date(2025, 10, 22, 18, 0)
console.log(inicioPartida);
const finPartida = new Date(2025, 10, 22, 18, 45)
console.log(finPartida);

let duracion = finPartida - inicioPartida;
let minutos = duracion / 60000;

console.log(minutos+" minutos");