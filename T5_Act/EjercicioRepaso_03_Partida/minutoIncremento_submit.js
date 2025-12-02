document.addEventListener("DOMContentLoaded", function(event) {
    const formulario = document.getElementById('formPartida');

    //mostrar error
    function mostrarError(id,mensaje){
        document.getElementById(id).innerHTML = mensaje;
    }
    //limpiar errores
    function limpiarError(){
        document.querySelectorAll('.error').forEach(e => e.textContent = '')
    }
    //patrones
    const patron_numero = /^[0-9]+$/

    //funcion validar minuto obligatorio + patron
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
    //funcion validar incremento obligatorio + patron
    function validarIncremento(){
        const incremento = document.getElementById('incremento').value.trim();
        if(!incremento){
            mostrarError("incrementoError","Incremento obligatorio");
            return false;
        }else if(!patron_numero.test(incremento)){
            mostrarError("incrementoError","Incremento no valido");
            return false;
        }
        mostrarError("incrementoError","");
        return true;
    }
    //validar al momento
    document.getElementById("minuto").addEventListener("input", () => {
        validarMinuto();
        document.getElementById('mensajeFinal').textContent = ""
    });
    document.getElementById("incremento").addEventListener("input", () => {
        validarIncremento();
        document.getElementById('mensajeFinal').textContent = ""
    });

    formulario.addEventListener('submit',(e) => {
        e.preventDefault();
        limpiarError();
        const minutovalido = validarMinuto();
        const incrementoValido = validarIncremento();

        if(minutovalido && incrementoValido){
            const minuto = Number(document.getElementById('minuto').value.trim());
            const incremento = Number(document.getElementById('incremento').value.trim());
            const resultado = minuto + (incremento * 40)

            formulario.reset()
            document.getElementById('mensajeFinal').textContent = `Duracion estimada: ${resultado} minutos`;
        }
    });
})