const lista = document.getElementById("lista");
const btn = document.getElementById("add");

lista.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Elemento creado";
    lista.appendChild(li);
})

btn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Actualizado";
    lista.insertBefore(li, lista.firstElementChild);
})
/*lista.prepend(li); // al inicio
lista.append(li);  // al final*/