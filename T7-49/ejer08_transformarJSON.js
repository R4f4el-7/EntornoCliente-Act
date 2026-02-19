function App() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        async function cargar() {
            const res = await fetch('movimientos.json');
            const data = await res.json();

            const traducidos = data.map(m => {
                const piezas = { pawn: 'Peón' };
                return `${piezas[m.piece]} de ${m.from} a ${m.to}`;
            });

            setLista(traducidos);
        }

        cargar();
    }, []);

    return e(
        'ul',
        null,
        lista.map((txt, i) => e('li', { key: i }, txt))
    );
}
