import { crearTablero } from './board.js';
import { colocarPeon } from './pieces.js';

const tabla = document.getElementById('board');

crearTablero(tabla);
colocarPeon('e2', 'e4');
