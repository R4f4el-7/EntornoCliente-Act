import {regexNombre,regexResultado, regexFechaSimple} from "./regex.js";

/**
 * función para validar un nombre (que lleve solo letras y espacios)
 * @param {string} nombre - El nombre a validar
 * @returns {boolean} - true si el nombre es válido, false en caso contrario
 */
export function validarNombre(nombre) {
    return regexNombre.test(nombre);
}

/**
 * función para validar que los nombres de jugador no sean iguales
 * @param {string} nombre1 - El nombre del primer jugador
 * @param {string} nombre2 - El nombre del segundo jugador
 * @returns {boolean} - true si los nombres son diferentes, false si son iguales
 */
export function validarNombresDiferentes(nombre1, nombre2) {
    return nombre1.trim().toLowerCase() !== nombre2.trim().toLowerCase();
}

/**
 * función para validar que la fecha no sea futura
 * @param {string} fecha - La fecha en formato "YYYY-MM-DD"
 * @returns {boolean} - true si la fecha no es futura, false si es futura
 */
export function validarFechaNoFutura(fecha) {
    const fechaInput = new Date(fecha);
    const fechaActual = new Date();

    // Establecer la hora de ambas fechas a medianoche para comparar solo las fechas
    fechaInput.setHours(0, 0, 0, 0);
    fechaActual.setHours(0, 0, 0, 0);

    return (fechaInput <= fechaActual) && regexFechaSimple.test(fecha);
}

/**
 * Función que valide que en el select del resultado se haya seleccionado una opción válida
 * @param {string} resultado - El valor seleccionado en el select
 * @returns {boolean} - true si es una opción válida, false si es la opción por defecto
 */
export function validarResultadoSeleccionado(resultado) {
    return regexResultado.test(resultado);
}