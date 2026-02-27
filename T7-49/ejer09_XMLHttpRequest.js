function cargarXHR(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'movimientos.json');

    xhr.onload = () => cb(JSON.parse(xhr.responseText));
    xhr.send();
}

async function cargarFetch() {
    const res = await fetch('movimientos.json');
    return await res.json();
}

function App() {
    const [datos, setDatos] = useState(null);

    useEffect(() => {
        cargarXHR(data => setDatos(data.movimientos));

        // Alternativa fetch:
        // cargarFetch().then(d => setDatos(d.movimientos));
    }, []);

    return e(
        'pre',
        null,
        datos
            ? 'fetch es más legible por async/await\n\n' +
            JSON.stringify(datos, null, 2)
            : 'Cargando…'
    );
}
