import { regexNombre, regexResultado, regexFechaSimple } from "./regex.js";

export function validarNombre(nombre) {
    return regexNombre.test(nombre.trim());
}

export function nombresDiferentes(b, n) {
    return b.trim().toLowerCase() !== n.trim().toLowerCase();
}

// Formato correcto + no futura
export function validarFecha(fechaStr) {
    if (!regexFechaSimple.test(fechaStr)) return false;

    const hoy = new Date();
    const fecha = new Date(fechaStr);
    return fecha <= hoy;
}

export function validarResultado(res) {
    return regexResultado.test(res);
}

