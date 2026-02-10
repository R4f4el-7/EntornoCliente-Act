const errorP = document.getElementById("error");

async function cargarDatos() {
    try {
        const response = await fetch("datos.json");

        if (!response.ok) {
            throw new Error("Archivo no encontrado");
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        errorP.textContent = "No se han podido cargar los datos";
    }
}

cargarDatos();
