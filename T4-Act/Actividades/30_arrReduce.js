/*Guarde en un array varias jugadas (algunas repetidas).
Muestre cuántas veces aparece cada jugada.*/

let arr_jugadas = ["Cd3", "e4", "e5", "Tg6", "Cd3", "e4"];

let conteo = arr_jugadas.reduce((acc, jugada) => {
    if (acc[jugada]) {
        acc[jugada] = acc[jugada] + 1;
    }else {
        acc[jugada] = 1;
    }
    return acc;
}, {});

console.log(conteo);


