/**
 * Author: Rafael Cosquillo
 * Comentarios: Manuel Moreno
 * Este programa simula una partida de ajedrez
 * */

/**
 * Esta funcion inicia la partida
 * Tiene tódo el funcionamiento dentro
 * */
function iniciarPartida(){
    /*Comentario de Manu: Declara variables*/
    // rafael: Se definen las variables para el seguimiento del turno y el conteo de movimientos.
    let turnoActual = 1;
    const turnosMaximo = 10;
    let cont_movimiento = 0;

    /*Comentario manu: Bucle con funcionamiento del juego*/
    // rafael: El bucle se ejecuta hasta alcanzar el número máximo de turnos permitido.
    while (turnoActual <= 10) {
        let turno = "";
        
        /*Comentario Manu: Asigna a la variable turno si le toca a blancas o a negras*/
        if(turnoActual % 2 === 0){
            turno = "Negras"
        }else{
            turno = "Blancas";
        }

        /*Comentario Manu: Depende del turno, saldrá quien mueve*/
        // rafael: Se muestra en consola quién debe realizar el movimiento en el turno actual.
        if(esTurnoDeBlancas(turno)){
            console.log("Turno "+turnoActual+" → Mueven las ♙ blancas");
        }else{
            console.log("Turno "+turnoActual+" → Mueven las ♟ negras");
            console.log("las negras hacen un movimiento válido");
        }

        /*Comentario Manu: Si se llega al turno 10, sel que ha acabado la partida y acaba el bucle*/
        if(turnoActual === 10){
            console.log("Se alcanzó el número máximo de turnos. Partida finalizada.");
        }
        // rafael: Cada tres turnos se imprime un recordatorio para revisar el reloj del juego.
        if(turnoActual % 3 === 0){
            console.log("Recordatorio: revisa el reloj de juego.")
        }

        /*Comentario Manu: Muestra el número de movimientos válidos*/
        (turnoActual % 2 === 0) ? cont_movimiento++: console.log("Cantidad de movimientos validos: "+cont_movimiento);

        /*Comentario Manu: Suma un turno al contador*/
        turnoActual += 1;
    }
}

/**
 * Devuelve true si es el turno de blancas
 * @return true o false
* */
function esTurnoDeBlancas(turno){
    return (turno === "Blancas");
}

/*Comentario de Manu: inicia la partida*/
iniciarPartida();

import React from "react";

const titulo = React.createElement(
    'h1',
    { className: 'main-title' },
    'Ejercicio 01 - Título'
);

export default titulo;