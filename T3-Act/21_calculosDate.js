/*Calcular la duración total de una partida.
Instrucciones:
Define dos fechas: inicio y fin de partida.
Calcula los minutos transcurridos.
Muestra el resultado con texto formateado.
Especificaciones buenas prácticas:
Uso de funciones puras.
Variables descriptivas.
Conversión clara de milisegundos a unidades legibles.
Documenta y comenta tu código.*/
const inicio = new Date(2026,1,1,18,0)
const fin = new Date(2026,1,1,18,45)

const minutos = (fin - inicio) / 60000

console.log(`La partida dura ${minutos} minutos`)