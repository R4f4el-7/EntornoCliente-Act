let inicioTurno;

function iniciarTurno() {
    inicioTurno = Date.now();
    console.log("inicio de turno...");
}

function finalizarTurno() {
    if (!inicioTurno) {
        console.log("Primero debes iniciar el turno con iniciarTurno().");
        return;
    }

    const finTurno = Date.now();
    const tiempoTranscurrido = (finTurno - inicioTurno) / 1000; // milisegundos -> segundos

    if (tiempoTranscurrido > 60) {
        console.log("Tiempo excedido: "+tiempoTranscurrido.toFixed(2)+" segundos");
    } else {
        console.log("Tiempo usado: "+tiempoTranscurrido.toFixed(2)+" segundos");
    }

    inicioTurno = null; // Reiniciamos para el próximo turno
}

iniciarTurno()

finalizarTurno();