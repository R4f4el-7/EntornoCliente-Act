const { useState } = React;

export default function Aperturas() {
    const [movimientos, setMovimientos] = useState([]);
    const [error, setError] = useState(null);

    const cargarAperturas = () => {
        setError(null);

        fetch("https://explorer.lichess.ovh/master")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error en la petición");
                }
                return response.json();
            })
            .then(data => {
                // Tomamos solo los primeros 5 movimientos
                const primerosCinco = data.moves.slice(0, 5);
                setMovimientos(primerosCinco);
            })
            .catch(err => {
                setError("Error al cargar las aperturas");
                setMovimientos([]);
            });
    };

    return React.createElement(
        "div",
        null,

        // Botón
        React.createElement(
            "button",
            { onClick: cargarAperturas },
            "Cargar aperturas"
        ),

        // Error en rojo
        error &&
        React.createElement(
            "p",
            { style: { color: "red" } },
            error
        ),

        // Lista
        React.createElement(
            "ul",
            null,
            movimientos.map((mov, index) =>
                React.createElement(
                    "li",
                    { key: index },
                    mov.san
                )
            )
        )
    );
}
