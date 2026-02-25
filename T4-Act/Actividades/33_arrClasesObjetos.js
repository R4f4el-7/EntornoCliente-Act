//Crea varios jugadores y guárdalos en un array.
class Jugador {
    constructor(nombre, elo = 1200) {
        this.nombre = nombre;
        this.elo = elo;
        this.victorias = 0;
        this.totalPartidas = 0;
    }
    ganarPartida() {
        this.elo += 15;
        this.victorias++;
    }
    contPartidas() {
        this.totalPartidas++;
    }
    mostrarGanador(){
        console.log("Ganador "+this.nombre);
        console.log("Elo "+this.elo);
        console.log("Total de partidas "+this.totalPartidas);
    }
}
const jugadores = [
    new Jugador("Carlos"),
    new Jugador("Lucía"),
    new Jugador("Miguel"),
];
//Usa la clase Partida para simular enfrentamientos aleatorios.
class Partida {
    constructor(jugador1, jugador2) {
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.movimientos = [];
    }
    jugar() {
        this.jugador1.contPartidas()//aumenta el total de partidas
        this.jugador2.contPartidas()
        const ganador = Math.random() > 0.5 ? this.jugador1 : this.jugador2;
        ganador.ganarPartida();
        ganador.mostrarGanador()
    }
}
const partidas = [
    new Partida(jugadores[0], jugadores[1]),
    new Partida(jugadores[0], jugadores[2]),
    new Partida(jugadores[1], jugadores[2]),
    new Partida(jugadores[0], jugadores[2]),
    new Partida(jugadores[0], jugadores[2]),
    new Partida(jugadores[1], jugadores[2])
];

//Guardar resultados
const resultados = partidas.map((p, i) => {
    const res = p.jugar();
    console.log(`-----Ganador de la partida ${i + 1}-----`);
    console.log(res);
    return res;
});

//Ranking final
const ranking = jugadores.sort((a, b) => b.elo - a.elo);
console.log("-----Ranking Final-----");
ranking.forEach((j, i) => {
    console.log(`${i + 1}. ${j.nombre} - Elo: ${j.elo}, Victorias: ${j.victorias}, Total Partidas: ${j.totalPartidas}`);
});

