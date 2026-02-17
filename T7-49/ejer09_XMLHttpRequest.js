import { useEffect, useState } from "react";

export default function Ejercicio9() {
    const [xhrData, setXhrData] = useState(null);
    const [fetchData, setFetchData] = useState(null);

    useEffect(() => {
        // XMLHttpRequest
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/movimientos.json");
        xhr.onload = () => {
            setXhrData(JSON.parse(xhr.responseText));
        };
        xhr.send();

        // Fetch
        fetch("/movimientos.json")
            .then(r => r.json())
            .then(setFetchData);
    }, []);

    return (
        <>
            <h3>XMLHttpRequest</h3>
            <pre>{JSON.stringify(xhrData, null, 2)}</pre>

            <h3>Fetch</h3>
            <pre>{JSON.stringify(fetchData, null, 2)}</pre>

            <p>
                👉 Fetch es más legible porque usa promesas y evita código
                imperativo complejo.
            </p>
        </>
    );
}
