import TestDiv from './TestDiv.js';
import VariasCajas from './VariosElementos.js';
import HandleClick from './ManejadorClicks.js';
import MiniTablero from './MiniTablero.js';

export default function App() {
    return React.createElement(
        'div',
        null,
        [
            React.createElement(TestDiv, { key: 'test' }),
            React.createElement(VariasCajas, { key: 'cajas' }),
            React.createElement(HandleClick, { key: 'click' }),
            React.createElement(MiniTablero, { key: 'tablero' })
        ]
    );
}