function App() {
    const [movimientos, setMovimientos] = useState(null);

    useEffect(() => {
        async function cargar() {
            const res = await fetch('movimientos.json');
            const data = await res.json();
            setMovimientos(data.movimientos);
        }

        cargar();
    }, []);

    if (!movimientos) {
        return e('p', null, 'Cargando movimientos…');
    }

    return e(
        'ul',
        null,
        movimientos.map((m, i) =>
            e('li', { key: i }, `${m.pieza}: ${m.from} → ${m.to}`)
        )
    );
}
