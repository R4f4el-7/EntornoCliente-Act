function App() {
    const [movimientos, setMovimientos] = useState(null);

    async function cargar() {
        const res = await fetch('movimientos.json');
        const data = await res.json();
        setMovimientos(data.movimientos);
    }

    return e('div', null, [
        e(
            'button',
            {
                key: 1,
                onClick: cargar,
                disabled: movimientos !== null
            },
            'Cargar movimientos'
        ),
        movimientos &&
        e(
            'ul',
            { key: 2 },
            movimientos.map((m, i) =>
                e('li', { key: i }, `${m.pieza}: ${m.from} → ${m.to}`)
            )
        )
    ]);
}
