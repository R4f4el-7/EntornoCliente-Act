/*Crea un array con varios jugadores (nombre, ELO, victorias, derrotas).
Calcula el ELO medio y la tasa de victorias.
Muestra el top 3 ordenado por rendimiento.
Guarda el ranking final en localStorage.
Abre una nueva ventana que muestre el ranking con formato HTML dinámico.*/
const jugadores = [
    { nombre: "Ana", elo: 1200, victorias: 15, derrotas: 5 },
    { nombre: "Luis", elo: 1100, victorias: 10, derrotas: 8 },
    { nombre: "Marta", elo: 1350, victorias: 20, derrotas: 3 },
    { nombre: "Carlos", elo: 1000, victorias: 7, derrotas: 12 },
    { nombre: "Sofía", elo: 1250, victorias: 18, derrotas: 6 }
];
const eloMedio = (jugadores.reduce((acc, j) => acc + j.elo,0))/jugadores.length;

const rankingTOP3 = jugadores.map(jugador => {
    const total = jugador.victorias + jugador.derrotas;
    return {
        ...jugador,
        rendimiento:(jugador.victorias/total)
    }
}).sort((a, b) => b.rendimiento - a.rendimiento).slice(0,3);

console.log(`Elo medio: ${eloMedio}`);
console.log(rankingTOP3);

let rankingGuardado = JSON.parse(localStorage.getItem('rankingGuardado'));
if (!rankingGuardado) {
    localStorage.setItem("rankingGuardado",JSON.stringify(rankingTOP3))
    rankingGuardado = rankingTOP3
}

const popup = window.open(
    "",
    "popup",
    "width:400;height:400"
)

const html =`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Ranking</title>
    </head>
    <body>
      <h2>Ranking</h2>
      <p>Nombre: ${rankingGuardado[0].nombre}</p>
      <p>Elo: ${rankingGuardado[0].elo}</p>
      <p>Victorias: ${rankingGuardado[0].victorias}</p>
      <p>Derrotas: ${rankingGuardado[0].derrotas}</p>
      <p>Rendimiento: ${rankingGuardado[0].rendimiento.toFixed(2)}</p>
      
      <p>Nombre: ${rankingGuardado[1].nombre}</p>
      <p>Elo: ${rankingGuardado[1].elo}</p>
      <p>Victorias: ${rankingGuardado[1].victorias}</p>
      <p>Derrotas: ${rankingGuardado[1].derrotas}</p>
      <p>Rendimiento: ${rankingGuardado[0].rendimiento.toFixed(2)}</p>
      
      <p>Nombre: ${rankingGuardado[2].nombre}</p>
      <p>Elo: ${rankingGuardado[2].elo}</p>
      <p>Victorias: ${rankingGuardado[2].victorias}</p>
      <p>Derrotas: ${rankingGuardado[2].derrotas}</p>
      <p>Rendimiento: ${rankingGuardado[0].rendimiento.toFixed(2)}</p>
      
    </body>
    </html>
`
popup.document.open();
popup.document.write(html);
popup.document.close();