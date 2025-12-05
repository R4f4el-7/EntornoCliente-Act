//obtener elementos
const minuto = document.getElementById("minuto");
const incremento = document.getElementById("incremento");

const errorMinuto = document.getElementById("minutoError");
const errorIncremento = document.getElementById("incrementoError");

const form = document.getElementById("formPartida");

//patron
const patron_num = /^[0-9]+$/

//limpiar errores
function limpiarError(){
    document.querySelectorAll('.error').forEach(e => e.textContent = '')
}

//funcion validar formulario
function validarFormulario() {
    // limpiar errores antes de validar
    limpiarError();
    let valido = true;

    // Validar minutos > 0
    const min = minuto.value.trim();
    if (!patron_num.test(min) || Number(min) <= 0) {
        errorMinuto.textContent = "Minuto debe ser un número mayor a 0";
        valido = false;
    }

    // Validar incremento (opcional pero >=0 si se escribe)
    const inc = incremento.value.trim();
    if (inc !== "" && (!patron_num.test(inc) || Number(inc) < 0)) {
        errorIncremento.textContent = "Incremento debe ser un número >= 0";
        valido = false;
    }

    document.getElementById("mensajeFinal").textContent = "";
    return valido;
}
//validacion a tiempo real
minuto.addEventListener("input", validarFormulario);
incremento.addEventListener("input", validarFormulario);

//Evitar que se recargue el formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validarFormulario()){
        const minuto_ok = Number(minuto.value.trim());
        const incremento_ok = incremento.value.trim() === ""
            ? 0
            : Number(incremento.value.trim());
        const resultado = minuto_ok + (incremento_ok * 40)

        form.reset()
        document.getElementById('mensajeFinal').textContent = `Duracion estimada: ${resultado} minutos`;
    }
});