import Tablero from './Tablero.js';
import Letras from './Letras.js';

export default function PawnBoard() {

    const [tablero, setTablero] = React.useState(iniciarTablero);
    const [seleccionada, setSeleccionada] = React.useState(null);

    function iniciarTablero() {
        const casillas = Array(64).fill(null);

        for (let i = 8; i < 16; i++) {
            casillas[i] = { type: 'pawn', color: 'black' };
        }

        for (let i = 48; i < 56; i++) {
            casillas[i] = { type: 'pawn', color: 'white' };
        }

        return casillas;
    }

    function manejarClick(indice) {
        if (seleccionada !== null) {
            intentarMover(seleccionada, indice);
            return;
        }

        if (tablero[indice]) {
            setSeleccionada(indice);
        }
    }

    function intentarMover(origen, destino) {
        const pieza = tablero[origen];
        if (!pieza || pieza.type !== 'pawn') return;

        const direccion = pieza.color === 'white' ? -8 : 8;
        const filaInicial = pieza.color === 'white' ? 6 : 1;

        const nuevoTablero = [...tablero];

        if (destino === origen + direccion && !tablero[destino]) {
            mover(origen, destino, nuevoTablero, pieza);
        }

        if (
            Math.floor(origen / 8) === filaInicial &&
            destino === origen + direccion * 2 &&
            !tablero[origen + direccion] &&
            !tablero[destino]
        ) {
            mover(origen, destino, nuevoTablero, pieza);
        }

        if (
            tablero[destino] &&
            tablero[destino].color !== pieza.color &&
            (destino === origen + direccion - 1 ||
                destino === origen + direccion + 1)
        ) {
            mover(origen, destino, nuevoTablero, pieza);
        }
    }

    function mover(origen, destino, nuevoTablero, pieza) {
        nuevoTablero[origen] = null;

        if (
            pieza.color === 'white' && Math.floor(destino / 8) === 0 ||
            pieza.color === 'black' && Math.floor(destino / 8) === 7
        ) {
            nuevoTablero[destino] = { type: 'queen', color: pieza.color };
        } else {
            nuevoTablero[destino] = pieza;
        }

        setTablero(nuevoTablero);
        setSeleccionada(null);
    }

    return React.createElement(
        'div',
        null,
        React.createElement(Tablero, {
            tablero,
            alClickCasilla: manejarClick
        }),
        React.createElement(Letras)
    );
}
