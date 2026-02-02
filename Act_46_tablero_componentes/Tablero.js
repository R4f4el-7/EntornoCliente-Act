import Casilla from './Casilla.js';
import Numeros from './Numeros.js';

export default function Tablero({ tablero, alClickCasilla }) {

    const ranks = ['8','7','6','5','4','3','2','1'];

    return React.createElement(
        'div',
        {
            style: {
                display: 'grid',
                gridTemplateColumns: '20px repeat(8, 50px)'
            }
        },

        ranks.map((rank, fila) => [
            React.createElement(Numeros, {
                key: `num-${rank}`,
                numero: rank
            }),

            tablero.slice(fila * 8, fila * 8 + 8).map((pieza, columna) => {
                const indice = fila * 8 + columna;
                const esOscura = (fila + columna) % 2 === 1;

                const simbolo = pieza
                    ? pieza.type === 'pawn'
                        ? pieza.color === 'white' ? '♙' : '♟'
                        : pieza.color === 'white' ? '♕' : '♛'
                    : '';

                return React.createElement(Casilla, {
                    key: indice,
                    esOscura,
                    simbolo,
                    alClick: () => alClickCasilla(indice)
                });
            })
        ])
    );
}
