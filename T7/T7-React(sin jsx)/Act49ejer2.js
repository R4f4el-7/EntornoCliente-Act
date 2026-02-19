/*EJERCICIO 2 — BUSCADOR DE MOVIMIENTOS (AJAX SIN BACKEND)
CONTEXTO
Usando los movimientos cargados del ejercicio anterior.
ENUNCIADO
1. Añade un <input> para buscar movimientos.
2. Cada vez que cambie el texto:
    o Filtra los movimientos que contengan ese texto.
3. Muestra solo los resultados filtrados.
No vuelvas a hacer fetch. Usa el estado.

SE EVALÚA
• useEffect con dependencias
• Pensar en estado
• Renderizado reactivo*/

const { useState, useEffect } = React;

function App() {
    const [datos, setDatos] = useState([]);
    const [filtro, setFiltro] = React.useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // --- Fetch solo cuando filtro cambia ---
    useEffect(() => {
        if (filtro === "") {
            setDatos([]); // Limpiar lista si no hay texto
            return;
        }

        async function fetchMovimientos() {
            setLoading(true);
            setError("");

            try {
                const respon = await fetch('./movimientos.json');
                const data = await respon.json();
                setDatos(data.movimientos);
            } catch (err) {
                console.error(err);
                setError('No se ha podido cargar el archivo');
            } finally {
                setLoading(false);
            }
        }

        fetchMovimientos();
    }, [filtro]); // solo cuando filtro cambia

    // --- Filtrar movimientos ---
    const movFiltrado = datos.filter(mov =>
        `${mov.pieza} ${mov.from} ${mov.to}`
            .toLowerCase()
            .includes(filtro.toLowerCase())
    );

    // --- Renderizado ---
    if (loading) return React.createElement("p", null, "Cargando datos...");
    if (error) return React.createElement("p", {style: {color: "red"}}, error);

    const filtroInput = React.createElement("input", {
        type: "text",
        placeholder: "Buscar movimiento...",
        value: filtro,
        onChange: e => setFiltro(e.target.value)
    });

    function pi(){
        console.log("h")
    }

    const lista = React.createElement(
        "ul",
        null,
        movFiltrado.map((mov, i) =>
            React.createElement("li", { key: i }, (`${mov.pieza}: ${mov.from} → ${mov.to}`))
        )
    );

    return React.createElement("div", null, filtroInput, lista, pi);
}

// Render en el DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));