import { useEffect, useState } from "react";

export default function Ejercicio8() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        async function cargar() {
            const res = await fetch("/movimientos.json");
            const data = await res.json();

            const transformados = data.map(m =>
                `Peón de ${m.from} a ${m.to}`
            );

            setLista(transformados);
        }

        cargar();
    }, []);

    return (
        <ul>
            {lista.map((t, i) => (
                <li key={i}>{t}</li>
            ))}
        </ul>
    );
}
