import { useState } from "react";

export default function Ejercicio6() {
    const [datos, setDatos] = useState(null);
    const [loading, setLoading] = useState(false);

    async function cargar() {
        setLoading(true);

        setTimeout(async () => {
            const res = await fetch("/movimientos.json");
            const data = await res.json();
            setDatos(data.movimientos);
            setLoading(false);
        }, 2000);
    }

    return (
        <>
            <button onClick={cargar}>Cargar</button>

            {loading && <p>Cargando…</p>}

            {datos && (
                <ul>
                    {datos.map((m, i) => (
                        <li key={i}>
                            {m.pieza}: {m.from} → {m.to}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
