import { useEffect, useState } from "react";

export default function Ejercicio3() {
    const [datos, setDatos] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function cargar() {
            try {
                const res = await fetch("/archivo-inexistente.json");
                if (!res.ok) throw new Error();
                const data = await res.json();
                setDatos(data);
            } catch {
                setError(true);
            }
        }
        cargar();
    }, []);

    if (error) return <p style={{ color: "red" }}>Error cargando los datos</p>;
    if (!datos) return <p>Cargando…</p>;

    return <pre>{JSON.stringify(datos, null, 2)}</pre>;
}
