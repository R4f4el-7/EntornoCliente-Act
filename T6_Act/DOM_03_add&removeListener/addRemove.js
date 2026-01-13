/*Regla CLAVE
No funciona con funciones anónimas
Debe ser la misma función*/
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function alerta() {
    alert("Click activo");
}
btn1.addEventListener("click", alerta);

btn2.addEventListener("click", () => {
    btn1.removeEventListener("click", alerta);
    alert("Evento eliminado");
});
