/*Ej3.1,3.2.- Solicitar datos y validación"
"1.	Solicita:
    a.	Nombre del jugador con blancas y del jugador con negras.
    b.	Resultado (“Ganan blancas”, “Ganan negras”, “Tablas”).
2.	Valida que los campos no estén vacíos.

Ej3.3.- localStorage
3.	Usa localStorage para:
    a.	Guardar la información de la última partida (nombre de los jugadores y el resultado).
    b.	Incrementar un contador total de partidas jugadas.

"Ej3.4,3.5.- Ventana nueva e informe"
"4.	Abre una nueva ventana llamada “Resumen del torneo”.
5.	Genera un informe HTML con:
    a.	Título del torneo.
    b.	Datos de la última partida (jugadores y resultado).
    c.	Número total de partidas jugadas.

Ej3.6.-personaliza la ventana
6.	Personaliza la ventana:
    a.	Fondo gris claro.
    b.	Fuente monoespaciada.
    c.	Texto azul si gana blancas, negro si gana negras, gris si tablas.*/

let nombreBlancas = prompt('Nombre de blancas: ')
let nombreNegras = prompt('Nombre de negras: ')
let resultado = prompt('Resultado(“Ganan blancas”, “Ganan negras”, “Tablas”):')

if (!nombreNegras || !nombreBlancas || !resultado) {
    alert('Todos los campos son obligatorios')
    location.reload()
}

const ultimaPartida = {
    nombreBlancas,
    nombreNegras,
    resultado
}

localStorage.setItem("ultimaPartida", JSON.stringify(ultimaPartida))

let contador = localStorage.getItem("contadorGuardado") || 0
contador++
localStorage.setItem("contadorGuardado", contador)

const popup = window.open(
    "",
    "popup",
    "width=400;height=400"
)

let color = "black"

if(resultado.toLowerCase() === "ganan blancas"){
    color = "blue"
}else if(resultado.toLowerCase() === "tablas"){
    color = "gray"
}

const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Resumen del torneo</title>
      <style>
        p{
            color: ${color};
        }
        body{
            background-color: darkgrey;
            font-family: monospace;
        }
       </style>
    </head>
    <body>
      <h2>Resumen del torneo</h2>
      <p>Jugador de blancas: ${nombreBlancas}</p>
      <p>Jugador de negras: ${nombreNegras}</p>
      <p>Resultado: ${resultado}</p>
      
      <p>Total partidas jugadas: ${contador}</p>
    </body>
    </html>
`
popup.document.open()
popup.document.write(html)
popup.document.close()


