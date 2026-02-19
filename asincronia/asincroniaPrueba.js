//THEN()
console.log("1️⃣ Inicio del programa");

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => {
        console.log("3️⃣ Datos recibidos(THEN):", data);
    });

console.log("2️⃣ El programa sigue ejecutándose...");

//ASYNC / AWAIT
async function obtenerDato() {
    console.log("1️⃣ Inicio");

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();

    console.log("3️⃣ Datos(AWAIT):", data);
}

obtenerDato();
console.log("2️⃣ El programa sigue...");