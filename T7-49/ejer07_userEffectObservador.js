function App() {
    const [ultimo, setUltimo] = useState(null);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (ultimo) {
            setMensaje(`Nuevo movimiento: ${ultimo}`);
        }
    }, [ultimo]);

    return e('div', null, [
        e(
            'button',
            { key: 1, onClick: () => setUltimo('Peón e2 → e4') },
            'Mover'
        ),
        e('p', { key: 2 }, mensaje)
    ]);
}
