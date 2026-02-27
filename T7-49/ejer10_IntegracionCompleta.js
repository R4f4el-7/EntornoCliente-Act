function App() {
    const [movimientos, setMovimientos] = useState([]);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        async function cargar() {
            const res = await fetch('movimientos.json');
            const data = await res.json();
            setMovimientos(data.movimientos);
        }
        cargar();
    }, []);

    return e('div', null, [
        e(
            'button',
            {
                key: 1,
                onClick: () => setVisible(v => !v)
            },
            visible ? 'Ocultar historial' : 'Mostrar historial'
        ),
        visible &&
        e(
            'ul',
            { key: 2 },
            movimientos.map((m, i) =>
                e('li', { key: i }, `${m.pieza}: ${m.from} → ${m.to}`)
            )
        )
    ]);
}
