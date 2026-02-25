//Crea un array con varios jugadores (nombre, ELO, victorias, derrotas).
const jugadores = [
    { nombre: "Carlos", elo: 1500, victorias: 25, derrotas: 10 },
    { nombre: "Lucía", elo: 1620, victorias: 30, derrotas: 8 },
    { nombre: "Miguel", elo: 1400, victorias: 18, derrotas: 15 },
    { nombre: "Sara", elo: 1700, victorias: 35, derrotas: 5 },
    { nombre: "Andrés", elo: 1550, victorias: 22, derrotas: 12 }
];
//Calcula el ELO medio y la tasa de victorias.
const medioELO = jugadores.reduce((acc, j) => acc + j.elo, 0) / jugadores.length;
console.log("Elo medio: "+medioELO);

const victoriasTotales = jugadores.reduce((acc, j) => acc + j.victorias, 0);
const derrotasTotales = jugadores.reduce((acc, j) => acc + j.derrotas, 0);
let tasaVictoria = (victoriasTotales / (victoriasTotales+derrotasTotales)) * 100;

console.log("Victorias totales: "+victoriasTotales);
console.log("Derrotas totales: "+derrotasTotales);
console.log("Tasa de victorias: "+Math.floor(tasaVictoria)+"%");

//Muestra el top 3 ordenado por rendimiento.
const jugadoresTop3 = jugadores.sort((a, b) => b.victorias - a.victorias)
for (let j = 0; j < 3; j++) {
    console.log(jugadoresTop3[j]);
}
//Guarda el ranking final en localStorage.
localStorage.setItem("Top3Jugadores", JSON.stringify(jugadoresTop3));
console.log("Se guarda");
//Abre una nueva ventana que muestre el ranking con formato HTML dinámico.
const html = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Ranking de Jugadores</title>
<style></style>
</head>
<body>
  <h1>Top 3 Jugadores</h1>
  <table>
    <tr><th>Posición</th><th>Nombre</th><th>ELO</th><th>Victorias</th><th>Derrotas</th></tr>
    <tr><td>1</td><td>${jugadoresTop3[0].nombre}</td><td>${jugadoresTop3[0].elo}</td><td>${jugadoresTop3[0].victorias}</td><td>${jugadoresTop3[0].derrotas}</td></tr>
    <tr><td>2</td><td>${jugadoresTop3[1].nombre}</td><td>${jugadoresTop3[1].elo}</td><td>${jugadoresTop3[1].victorias}</td><td>${jugadoresTop3[1].derrotas}</td></tr>
    <tr><td>3</td><td>${jugadoresTop3[2].nombre}</td><td>${jugadoresTop3[2].elo}</td><td>${jugadoresTop3[2].victorias}</td><td>${jugadoresTop3[2].derrotas}</td></tr>
  </table>
</body>
</html>
`;

// Abre la nueva ventana y escribe el contenido
const rankingVentana = window.open("", "Ranking", "width=400,height=400");
rankingVentana.document.open();
rankingVentana.document.write(html);
rankingVentana.document.close();