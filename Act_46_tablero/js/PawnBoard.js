export default function PawnBoard() {

    // =============================
    // ESTADO
    // =============================
    const [board, setBoard] = React.useState(initBoard);
    const [selected, setSelected] = React.useState(null);

    const files = ['A','B','C','D','E','F','G','H'];
    const ranks = ['8','7','6','5','4','3','2','1'];

    // =============================
    // TABLERO INICIAL
    // =============================
    function initBoard() {
        const squares = Array(64).fill(null);

        // Peones negros (fila 7)
        for (let i = 8; i < 16; i++) {
            squares[i] = { type: 'pawn', color: 'black' };
        }

        // Peones blancos (fila 2)
        for (let i = 48; i < 56; i++) {
            squares[i] = { type: 'pawn', color: 'white' };
        }

        return squares;
    }

    // =============================
    // MANEJO DE CLICKS (CORREGIDO)
    // =============================
    function handleClick(index) {

        // Si hay selección previa, intentar mover (aunque haya pieza)
        if (selected !== null) {
            attemptMove(selected, index);
            return;
        }

        // Si no hay selección, seleccionar pieza
        if (board[index]) {
            setSelected(index);
        }
    }

    // =============================
    // LÓGICA DEL PEÓN
    // =============================
    function attemptMove(from, to) {
        const piece = board[from];
        if (!piece || piece.type !== 'pawn') return;

        const dir = piece.color === 'white' ? -8 : 8;
        const startRow = piece.color === 'white' ? 6 : 1;

        const newBoard = [...board];

        // AVANCE FRONTAL
        if (to === from + dir && !board[to]) {
            move(from, to, newBoard, piece);
        }

        // DOBLE AVANCE INICIAL
        if (
            Math.floor(from / 8) === startRow &&
            to === from + dir * 2 &&
            !board[from + dir] &&
            !board[to]
        ) {
            move(from, to, newBoard, piece);
        }

        // CAPTURA DIAGONAL
        if (
            board[to] &&
            board[to].color !== piece.color &&
            (to === from + dir - 1 || to === from + dir + 1)
        ) {
            move(from, to, newBoard, piece);
        }
    }

    // =============================
    // MOVIMIENTO + CORONACIÓN
    // =============================
    function move(from, to, newBoard, piece) {
        newBoard[from] = null;

        // CORONACIÓN AUTOMÁTICA
        if (
            piece.color === 'white' && Math.floor(to / 8) === 0 ||
            piece.color === 'black' && Math.floor(to / 8) === 7
        ) {
            newBoard[to] = { type: 'queen', color: piece.color };
        } else {
            newBoard[to] = piece;
        }

        setBoard(newBoard);
        setSelected(null);
    }

    // =============================
    // RENDER
    // =============================
    return React.createElement(
        'div',
        null,

        // TABLERO + RANKS
        React.createElement(
            'div',
            {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '20px repeat(8, 50px)'
                }
            },

            ranks.map((rank, r) => [
                // Número lateral
                React.createElement(
                    'div',
                    {
                        key: `rank-${rank}`,
                        style: { lineHeight: '50px', textAlign: 'center' }
                    },
                    rank
                ),

                // Casillas
                board.slice(r * 8, r * 8 + 8).map((square, c) => {
                    const index = r * 8 + c;
                    const dark = (r + c) % 2 === 1;

                    const symbol = square
                        ? square.type === 'pawn'
                            ? square.color === 'white' ? '♙' : '♟'
                            : square.color === 'white' ? '♕' : '♛'
                        : '';

                    return React.createElement(
                        'div',
                        {
                            key: index,
                            className: `square ${dark ? 'dark' : 'light'}`,
                            onClick: () => handleClick(index)
                        },
                        symbol
                    );
                })
            ])
        ),

        // FILES A–H
        React.createElement(
            'div',
            {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '20px repeat(8, 50px)',
                    textAlign: 'center'
                }
            },
            React.createElement('div', null),
            files.map(f =>
                React.createElement('div', { key: f }, f)
            )
        )
    );
}
