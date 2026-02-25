const crearHistorial = () =>{
    const historial =[]
    const registrarJugada = (jugada) => {
        historial.push(jugada);
        console.log(`Se ha guardado la jugada: ${jugada}`);
    }
    const mostrarHistorial = () => {
        const historialIndice = historial.map((registro,index) => `${index+1}. ${registro}`);
        console.log(historialIndice);
    }

    return {
        registrarJugada,
        mostrarHistorial
    };
}
export const historial = crearHistorial();
