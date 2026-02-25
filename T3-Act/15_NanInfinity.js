/*Define una función validarPosicion(x, y) que compruebe si las coordenadas están dentro del tablero (1–8).

Si alguna coordenada es inválida (NaN, Infinity o fuera del rango), muestra un mensaje de error.*/
function validarPosicion(x,y){
    if(isNaN(x) || isNaN(y)){
        console.log(`El valor no es numerico`)
        return;
    }
    if(!isFinite(x) || !isFinite(y)){
        console.log(`El valor es infinito`)
        return;
    }
    if(x >= 9 || x <= 0 || y >= 9 || y <= 0){
        console.log(`El rango de los numeros deber entre 1-8`)
        return;
    }
    console.log(`El valor valido`);
}
validarPosicion(1,2)
validarPosicion(0,8)
validarPosicion(1,9)
validarPosicion(1,Infinity)