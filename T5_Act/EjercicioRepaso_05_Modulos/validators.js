// validators.js

export function validarNombre(nombre) {
    if (!nombre || nombre.trim() === "") {
        return { valido: false, mensaje: "El nombre es obligatorio." };
    }
    if (nombre.length < 3) {
        return { valido: false, mensaje: "El nombre debe tener al menos 3 caracteres." };
    }
    return { valido: true };
}

export function validarNivel(nivel) {
    const nivelesValidos = ["Local", "Autonómico", "Nacional"];
    if (!nivelesValidos.includes(nivel)) {
        return { valido: false, mensaje: "Selecciona un nivel válido." };
    }
    return { valido: true };
}

export function validarFormulario({ nombre, nivel }) {
    const validacionNombre = validarNombre(nombre);
    if (!validacionNombre.valido) return validacionNombre;

    const validacionNivel = validarNivel(nivel);
    if (!validacionNivel.valido) return validacionNivel;

    return { valido: true };
}
