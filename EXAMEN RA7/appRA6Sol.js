const FILES = ["a","b","c","d","e","f","g","h"];
const boardElement = document.getElementById("board");

function esMovimientoCaballoValido(origen, destino) {
  const col1 = FILES.indexOf(origen[0]);
  const fila1 = Number(origen[1]);
  const col2 = FILES.indexOf(destino[0]);
  const fila2 = Number(destino[1]);

  const diffCol = Math.abs(col1 - col2);
  const diffFila = Math.abs(fila1 - fila2);

  return (diffCol === 2 && diffFila === 1) ||
         (diffCol === 1 && diffFila === 2);
}

function obtenerMovimientosValidos(posicion) {
  const movimientos = [];
  for (let col of FILES) {
    for (let fila = 1; fila <= 8; fila++) {
      const destino = col + fila;
      if (esMovimientoCaballoValido(posicion, destino)) {
        movimientos.push(destino);
      }
    }
  }
  return movimientos;
}

function limpiarResaltado() {
  const casillas = document.querySelectorAll(".square");
  casillas.forEach(function(c) {
    c.classList.remove("highlight");
  });
}

function resaltarMovimientos(posicion) {
  limpiarResaltado();
  const movimientos = obtenerMovimientosValidos(posicion);

  movimientos.forEach(function(coord) {
    const casilla = document.querySelector('[data-square="' + coord + '"]');
    if (casilla) casilla.classList.add("highlight");
  });
}

function moverCaballoVisual(destino) {
  const casillas = document.querySelectorAll(".square");
  casillas.forEach(function(c) {
    c.textContent = "";
  });

  const destinoElement = document.querySelector('[data-square="' + destino + '"]');
  if (destinoElement) destinoElement.textContent = "♞";
}

function generarTablero() {
  for (let row = 8; row >= 1; row--) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      const coord = FILES[col] + row;

      square.classList.add("square");
      square.classList.add((row + col) % 2 === 0 ? "light" : "dark");
      square.dataset.square = coord;

      boardElement.appendChild(square);
    }
  }
}

generarTablero();

let posicionActual = "e4";
moverCaballoVisual(posicionActual);
resaltarMovimientos(posicionActual);

const btnCargar = document.getElementById("cargarReto");
const btnEjecutar = document.getElementById("ejecutarReto");
const estado = document.getElementById("estado");

let retoActual = {
  posicionInicial: "e4",
  movimientos: ["f6", "g8", "h6"]
};

let movimientosUsuario = [];

btnCargar.addEventListener("click", function() {
  posicionActual = retoActual.posicionInicial;
  moverCaballoVisual(posicionActual);
  resaltarMovimientos(posicionActual);
  movimientosUsuario = [];
  estado.textContent = "Reto iniciado";
});

boardElement.addEventListener("click", function(e) {
  if (!e.target.classList.contains("square")) return;

  const destino = e.target.dataset.square;

  if (esMovimientoCaballoValido(posicionActual, destino)) {
    posicionActual = destino;
    moverCaballoVisual(destino);
    resaltarMovimientos(posicionActual);
    movimientosUsuario.push(destino);
  }
});

btnEjecutar.addEventListener("click", function() {
  const correcto =
    movimientosUsuario.length === retoActual.movimientos.length &&
    movimientosUsuario.every(function(mov, index) {
      return mov === retoActual.movimientos[index];
    });

  estado.textContent = correcto ? "CORRECTO" : "INCORRECTO";
});