import { useEffect, useState } from "react";

export default function Ejercicio10() {
    const [movimientos, setMovimientos] = useState([]);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        async function cargar() {
            const res = await fetch("/movimientos.json");
            const data = await res.json();
            setMovimientos(data.movimientos);
        }
        cargar();
    }, []);

    return (
        <>
            <button onClick={() => setVisible(v => !v)}>
                {visible ? "Ocultar" : "Mostrar"} historial
            </button>

            {visible && (
                <ul>
                    {movimientos.map((m, i) => (
                        <li key={i}>
                            {m.pieza}: {m.from} → {m.to}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
