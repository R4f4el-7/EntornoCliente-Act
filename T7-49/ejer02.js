import { useEffect, useState } from "react";

export default function Ejercicio2() {
    const [movimientos, setMovimientos] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [filtrados, setFiltrados] = useState([]);

    useEffect(() => {
        async function cargar() {
            const res = await fetch("/movimientos.json");
            const data = await res.json();
            setMovimientos(data.movimientos);
            setFiltrados(data.movimientos);
        }
        cargar();
    }, []);

    useEffect(() => {
        const f = movimientos.filter(m =>
            `${m.pieza} ${m.from} ${m.to}`
                .toLowerCase()
                .includes(busqueda.toLowerCase())
        );
        setFiltrados(f);
    }, [busqueda, movimientos]);

    return (
        <>
            <input
                placeholder="Buscar movimiento"
                onChange={e => setBusqueda(e.target.value)}
            />

            <ul>
                {filtrados.map((m, i) => (
                    <li key={i}>
                        {m.pieza}: {m.from} → {m.to}
                    </li>
                ))}
            </ul>
        </>
    );
}
