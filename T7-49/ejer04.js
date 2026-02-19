import { useEffect, useState } from "react";

export default function Ejercicio4() {
    const [turno, setTurno] = useState("blancas");
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        setMensaje(`Turno de las ${turno}`);
    }, [turno]);

    return (
        <>
            <p>{mensaje}</p>

            <button
                onClick={() =>
                    setTurno(t => (t === "blancas" ? "negras" : "blancas"))
                }
            >
                Cambiar turno
            </button>
        </>
    );
}
