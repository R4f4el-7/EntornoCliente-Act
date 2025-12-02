document.addEventListener("DOMContentLoaded", function(event) {
    const formulario = document.getElementById('formulario');

    //mostrar error
    function mostrarError(id,mensaje){
        document.getElementById(id).innerHTML = mensaje;
    }
    //patrones
    const patron_numero = /^[0-9]+$/

    //funciones validar minuto
    function validarMinuto(){
        const minuto = document.getElementById('minuto').value.trim();
        if(!minuto){
            mostrarError("minutoError","Minuto obligatorio");
            return false;
        }else if(!patron_numero.test(minuto)){
            mostrarError("minutoError","Minuto no valido");
            return false;
        }
        mostrarError("minutoError","");
        return true;
    }
})