//closure - Una closure permite que una función interna tenga acceso a las variables de su función exterior aunque la función exterior ya haya terminado.
function crearContador() {
    let cuenta = 0;  // variable privada de la función exterior
    return function() { // función interna → closure
        cuenta++;      // sigue teniendo acceso a `cuenta`
        return cuenta;
    }
}

const contar = crearContador();

console.log(contar()); // 1
console.log(contar()); // 2
console.log(contar()); // 3
//