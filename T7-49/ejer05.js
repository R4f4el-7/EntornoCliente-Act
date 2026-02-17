import { useState } from "react";

export default function Ejercicio5() {
    const [movimientos, setMovimientos] = useState(null);

    async function cargar() {
        const res = await fetch("/movimientos.json");
        const data = await res.json();
        setMovimientos(data.movimientos);
    }

    return (
        <>
            <button onClick={cargar} disabled={movimientos}>
                Cargar movimientos
            </button>

            {movimientos && (
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
