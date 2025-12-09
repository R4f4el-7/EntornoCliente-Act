import {inicializarFormulario} from "./formController.js";
import {botonReset} from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    inicializarFormulario();
    document.getElementById("btn-reset").addEventListener("click", botonReset);
});
