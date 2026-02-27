/*Simule los puntos de las piezas capturadas:

Peón = 1

Caballo = 3

Alfil = 3

Torre = 5

Dama = 9

Calcula la puntuación total y muestra el resultado redondeado a un decimal.*/
let piezas = {"peon":1,"caballo":3,"alfil":3,"torre":5,"dama":9}
const capturas = {
    peon: 4,
    caballo: 1,
    alfil: 2,
    torre: 1,
    dama: 0
};
let total = 0;

//1 FORMA clave(tambien puede ser valor)
for (let clave in piezas) {
    total += piezas[clave] * capturas[clave];
}

console.log(`Puntuacion total ${total.toFixed(1)}`);
//2 FORMA Claves
let claves = Object.keys(piezas)

claves.forEach(clave => {
    console.log(clave);
})
//3 Forma valor
let valores = Object.values(piezas)

valores.forEach(valor  => {
    total += valor
});
console.log(total.toFixed(1));

//4 FORMA clave/valor
Object.entries(piezas).forEach(([clave,valor]) => {
    console.log(clave,valor);
})