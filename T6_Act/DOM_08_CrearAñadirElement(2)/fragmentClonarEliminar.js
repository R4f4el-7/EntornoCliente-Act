const lista = document.getElementById("lista");
const original = document.getElementById("original");
const contenedor = document.getElementById("contenedor");

// Clonar
document.getElementById("clonar").addEventListener("click", () => {
    const copia = original.cloneNode(true);
    lista.appendChild(copia);
});

// Fragment
document.getElementById("crear").addEventListener("click", () => {
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 5; i++) {
        const p = document.createElement("p");
        p.textContent = "Línea " + i;
        fragment.appendChild(p);
    }

    contenedor.appendChild(fragment);
});

// Remove
document.getElementById("eliminar").addEventListener("click", () => {
    document.getElementById("texto").remove();
});

