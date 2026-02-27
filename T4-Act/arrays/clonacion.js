const jugadores = [
    { nombre: "Ana", elo: 1000 },
    { nombre: "Luis", elo: 1000 }
];

//const copia = [...jugadores]; //Porque ambos arrays apuntan al mismo objeto interno.
const copia = jugadores.map(jugador => ({...jugador}));

copia[0].elo = 2000;

console.log(jugadores[0].elo); // 2000 😱

/*Regla profesional:
Si el array tiene primitivos → spread está perfecto
Si tiene objetos simples → usa map + spread*/