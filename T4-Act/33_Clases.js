
class Jugador {
    constructor(nombre,elo=1000) {
        this.nombre = nombre;
        this.elo = elo;
        this.victorias = 0
        this.totalPartidas = 0;
    }
    ganar(){
        this.elo += 10
        this.victorias++
    }
    contPartidas(){
        this.totalPartidas++;
    }
    mostrarJugador(){
        console.log('----Datos jugador----')
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Elo: ${this.elo}`)
        console.log(`Victorias: ${this.victorias}`)
    }
}
class Pieza{
    constructor(tipo, color, posicion) {
        this.tipo = tipo;
        this.color = color;
        this.posicion = posicion;
    }
    mover(nuevaPosicion){
        this.posicion = nuevaPosicion;
    }
}
class Partida{
    constructor(jugador1, jugador2) {
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.movimientos = []
    }
    jugar(){
        this.jugador1.contPartidas()
        this.jugador2.contPartidas()
        const ganador = Math.random() > 0.5 ? this.jugador1 :this.jugador2;
        ganador.ganar()
        return ganador;
    }
}
/*Crea varios jugadores y guárdalos en un array.
Usa la clase Partida para simular enfrentamientos aleatorios.
Almacena los resultados (ganador, elo, total partidas).
Muestra un ranking final en consola.*/
const lista_Jugadores = [
    new Jugador("Jugador 1", 1000),
    new Jugador("Jugador 2", 1000),
    new Jugador("Jugador 3", 1000),
    new Jugador("Jugador 4", 1000),
    new Jugador("Jugador 5", 1000)
]
function aleatorio(){
    return Math.floor(Math.random() * lista_Jugadores.length)
}

const partidas =[]
partidas.push(new Partida(lista_Jugadores[aleatorio()],lista_Jugadores[aleatorio()]));
partidas.push(new Partida(lista_Jugadores[aleatorio()],lista_Jugadores[aleatorio()]));
partidas.push(new Partida(lista_Jugadores[aleatorio()],lista_Jugadores[aleatorio()]));
partidas.push(new Partida(lista_Jugadores[aleatorio()],lista_Jugadores[aleatorio()]));
partidas.push(new Partida(lista_Jugadores[aleatorio()],lista_Jugadores[aleatorio()]));

console.log(partidas);

const resultados = []
partidas.forEach(partida => {
    const ganador = partida.jugar()
    const resultado = {
        ganador: ganador.nombre,
        elo: ganador.elo,
        total: ganador.totalPartidas
    }
    resultados.push(resultado);
})
console.table(resultados)

const ranking = [...lista_Jugadores].sort((a, b) => b.elo - a.elo);
console.log("---RANKING---")
console.table(ranking)
