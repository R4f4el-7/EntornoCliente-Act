function App() {
    const [movimientos, setMovimientos] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [filtrados, setFiltrados] = useState([]);

    useEffect(() => {
        async function cargar() {
            const res = await fetch('movimientos.json');
            const data = await res.json();
            setMovimientos(data.movimientos);
            setFiltrados(data.movimientos);
        }
        cargar();
    }, []);

    useEffect(() => {
        const f = movimientos.filter(m =>
            `${m.pieza} ${m.from} ${m.to}`
                .toLowerCase()
                .includes(busqueda.toLowerCase())
        );
        setFiltrados(f);
    }, [busqueda, movimientos]);

    return e('div', null, [
        e('input', {
            key: 'input',
            onChange: ev => setBusqueda(ev.target.value),
            placeholder: 'Buscar...'
        }),
        e(
            'ul',
            { key: 'lista' },
            filtrados.map((m, i) =>
                e('li', { key: i }, `${m.pieza}: ${m.from} → ${m.to}`)
            )
        )
    ]);
}
