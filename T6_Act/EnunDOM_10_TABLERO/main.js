const tabla = document.getElementById('board');

const posicion = ["a","b","c","d","e","f","g","h"];

for (let i = 8; i >= 1; i--) {
    for (let j = 0; j <= 7; j++) {
        const casilla =document.createElement('div');
        casilla.classList.add('square');

        if (i % 2 === 0) {
            if (j % 2 === 0) {
                casilla.classList.add('light');
            }else {
                casilla.classList.add('dark');
            }
        }else{
            if (j % 2 !== 0) {
                casilla.classList.add('light');
            }else {
                casilla.classList.add('dark');
            }
        }
        casilla.id =  posicion[j] + i;

        tabla.appendChild(casilla);
    }
}
const e2 = document.getElementById('e2');
e2.textContent = "♙"
e2.addEventListener('click', ()=>{
    const siguienteCasilla = document.querySelector('#e4');
    if (siguienteCasilla) {
        e2.textContent = "";
        siguienteCasilla.textContent = "♙";
    }
})
