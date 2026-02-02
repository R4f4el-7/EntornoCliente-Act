import Tablero from './Tablero.js';
import Letras from './Letras.js';

export default function PawnBoard() {

    const [tablero, setTablero] = React.useState(iniciarTablero);
    const [seleccionada, setSeleccionada] = React.useState(null);

    function iniciarTablero() {
        const casillas = Array(64).fill(null);

        //TORRES NEGRAS
        casillas[0] = { type: 'rook', color: 'black' };
        casillas[7] = { type: 'rook', color: 'black' };

        //TORRES BLANCAS
        casillas[56] = { type: 'rook', color: 'white' };
        casillas[63] = { type: 'rook', color: 'white' };

        return casillas;
    }
    //Intenta mover una pieza desde origen hasta destino
    function manejarClick(indice) {
        //Si no hay pieza o no es una torre, no hacemos nada
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
        if (!pieza || pieza.type !== 'rook') return;

        moverTorre(origen, destino, pieza);
    }
    //Lógica específica para mover la torre
    function moverTorre(origen, destino, pieza) {

        const filaOrigen = Math.floor(origen / 8);
        const filaDestino = Math.floor(destino / 8);

        const colOrigen = origen % 8;
        const colDestino = destino % 8;

        const mismaFila = filaOrigen === filaDestino;
        const mismaColumna = colOrigen === colDestino;

        //la torre SOLO se mueve en línea recta
        if (!mismaFila && !mismaColumna) return;

        //no capturar pieza propia
        if (
            tablero[destino] &&
            tablero[destino].color === pieza.color
        ) {
            return;
        }
        //Creamos una copia del tablero luego quitamos la pieza del origen y colocamos la pieza en el destino
        const nuevoTablero = [...tablero];
        nuevoTablero[origen] = null;
        nuevoTablero[destino] = pieza;

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
