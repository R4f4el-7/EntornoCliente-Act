function App() {
    const [turno, setTurno] = useState('blancas');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        setMensaje(`Turno de las ${turno}`);
    }, [turno]);

    return e('div', null, [
        e('p', { key: 1 }, mensaje),
        e(
            'button',
            {
                key: 2,
                onClick: () =>
                    setTurno(t => (t === 'blancas' ? 'negras' : 'blancas'))
            },
            'Cambiar turno'
        )
    ]);
}
