function App() {
    const [datos, setDatos] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function cargar() {
            try {
                const res = await fetch('datos.json');
                if (!res.ok) throw new Error();
                const data = await res.json();
                setDatos(data);
            } catch {
                setError(true);
            }
        }
        cargar();
    }, []);

    if (error) {
        return e('p', { style: { color: 'red' } }, 'Error cargando los datos');
    }

    return e('pre', null, JSON.stringify(datos, null, 2));
}
