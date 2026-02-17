import { useEffect, useState } from "react";

export default function Ejercicio1() {
    const [movimientos, setMovimientos] = useState(null);

    useEffect(() => {
        async function cargar() {
            const res = await fetch("/movimientos.json");
            const data = await res.json();
            setMovimientos(data.movimientos);
        }

        cargar();
    }, []);

    if (!movimientos) return <p>Cargando movimientos…</p>;

    return (
        <ul>
            {movimientos.map((m, i) => (
                <li key={i}>
                    {m.pieza}: {m.from} → {m.to}
                </li>
            ))}
        </ul>
    );
}
