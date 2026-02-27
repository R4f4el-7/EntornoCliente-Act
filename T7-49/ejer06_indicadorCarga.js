function App() {
    const [datos, setDatos] = useState(null);
    const [loading, setLoading] = useState(false);

    async function cargar() {
        setLoading(true);

        setTimeout(async () => {
            const res = await fetch('movimientos.json');
            const data = await res.json();
            setDatos(data.movimientos);
            setLoading(false);
        }, 1500);
    }

    return e('div', null, [
        e('button', { key: 1, onClick: cargar }, 'Cargar'),
        loading && e('p', { key: 2 }, 'Cargando…'),
        datos &&
        e(
            'ul',
            { key: 3 },
            datos.map((m, i) =>
                e('li', { key: i }, `${m.pieza}: ${m.from} → ${m.to}`)
            )
        )
    ]);
}
