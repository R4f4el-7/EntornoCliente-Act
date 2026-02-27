/*Declara una variable movimientos inicializada a 0.
Simula que se han hecho 5 movimientos.
Muestra el resultado en consola con una plantilla de texto.
Especificaciones Buenas prácticas:
Nombres descriptivos.
let para variables que cambian.
Uso de plantillas literales para mensajes claros.
Comentar y Documentar*/
let movimientos = 0
for (let i = 0; i < 5;i++){
    console.log(`Contador de movimientos: ${movimientos}`)
    movimientos += 1
}