//isNaN e isFinite no son operadores: son funciones globales de JavaScript
// que sirven para validar valores numéricos.
function  validarPosicion(x, y){
    if(isNaN(x) || isNaN(y)){
        console.log("Valor no numerico")
        return false;
    }
    if(!isFinite(x) || !isFinite(y)){
        console.log("Valor infinito")
        return false;
    }
    if (x < 1 || x > 8 || y < 1 || y > 8) {
        console.error("Deben estar dentro del rango 1–8.");
        return false;
    }
    console.log("Corecto");
    return true;
}

validarPosicion(4, 5);
validarPosicion(0, 7);
validarPosicion(9, 3);
validarPosicion(NaN, 4);
validarPosicion(2, Infinity);
