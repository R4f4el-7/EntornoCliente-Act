import { useEffect, useState } from "react";

export default function Ejercicio7() {
    const [ultimoMovimiento, setUltimoMovimiento] = useState(null);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        if (ultimoMovimiento) {
            setMensaje(`Nuevo movimiento: ${ultimoMovimiento}`);
        }
    }, [ultimoMovimiento]);

    return (
        <>
            <button onClick={() => setUltimoMovimiento("e2 → e4")}>
                Hacer movimiento
            </button>

            <p>{mensaje}</p>
        </>
    );
}
