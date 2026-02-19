/* =========================
   MANUEL MORENO BELLÓN
   2º DAW - RA4
   ========================= */
   
/* =========================
   UTILIDADES COMUNES
   ========================= */



/* =========================
   EJERCICIO 1
   Modelo de datos y utilidades básicas
   ========================= */

/**
 * Inventario 16 piezas por jugador:Blancas (P1..P16) y Negras (P17..P32)
 * Formato:
 *  { id: "P1", tipo: "peon"|"torre"|..., color: "blanco"|"negro", capturada: false }
 */
const piezasIniciales = [
  { id: "P1",  tipo: "rey",    color: "blanco", capturada: false },
  { id: "P2",  tipo: "reina",  color: "blanco", capturada: false },
  { id: "P3",  tipo: "torre",  color: "blanco", capturada: false },
  { id: "P4",  tipo: "torre",  color: "blanco", capturada: false },
  { id: "P5",  tipo: "alfil",  color: "blanco", capturada: false },
  { id: "P6",  tipo: "alfil",  color: "blanco", capturada: false },
  { id: "P7",  tipo: "caballo",color: "blanco", capturada: false },
  { id: "P8",  tipo: "caballo",color: "blanco", capturada: false },
  { id: "P9",  tipo: "peon",   color: "blanco", capturada: false },
  { id: "P10", tipo: "peon",   color: "blanco", capturada: false },
  { id: "P11", tipo: "peon",   color: "blanco", capturada: false },
  { id: "P12", tipo: "peon",   color: "blanco", capturada: false },
  { id: "P13", tipo: "peon",   color: "blanco", capturada: false },
  { id: "P14", tipo: "peon",   color: "blanco", capturada: false },
  { id: "P15", tipo: "peon",   color: "blanco", capturada: false },
  { id: "P16", tipo: "peon",   color: "blanco", capturada: false },

  { id: "P17", tipo: "rey",    color: "negro", capturada: false },
  { id: "P18", tipo: "reina",  color: "negro", capturada: false },
  { id: "P19", tipo: "torre",  color: "negro", capturada: false },
  { id: "P20", tipo: "torre",  color: "negro", capturada: false },
  { id: "P21", tipo: "alfil",  color: "negro", capturada: false },
  { id: "P22", tipo: "alfil",  color: "negro", capturada: false },
  { id: "P23", tipo: "caballo",color: "negro", capturada: false },
  { id: "P24", tipo: "caballo",color: "negro", capturada: false },
  { id: "P25", tipo: "peon",   color: "negro", capturada: false },
  { id: "P26", tipo: "peon",   color: "negro", capturada: false },
  { id: "P27", tipo: "peon",   color: "negro", capturada: false },
  { id: "P28", tipo: "peon",   color: "negro", capturada: false },
  { id: "P29", tipo: "peon",   color: "negro", capturada: false },
  { id: "P30", tipo: "peon",   color: "negro", capturada: false },
  { id: "P31", tipo: "peon",   color: "negro", capturada: false },
  { id: "P32", tipo: "peon",   color: "negro", capturada: false }
];

const piezasModificado = JSON.parse(JSON.stringify(piezasIniciales)); //Copia del array inicial para pruebas posteriores


//función que busca por id una pieza en el inventario y si la encuentra la devuelve, si no devuelve null
/**
 * Esta función devuelve la pieza si la encuentra por el id y sino null
 * @param id String
 * @param piezas Array de piezas en el que se buscará
 * @return pieza || null*/
function buscarPieza(id, piezas) {
    return piezas.find(p => p.id === id) || null;
}

//función que devuelve un objeto con cuantas piezas hay de cada tipo
/**
 * Esta función devuelve un objeto con el conteo de piezas por tipo
 * @param piezas Array de piezas en el que se buscará
 * @return Object {tipo: cantidad}
 */
function contarPorTipo(piezas) {
    let conteo = {};
    piezas.forEach(pieza => {
        if (conteo[pieza.tipo]) {
            conteo[pieza.tipo]++;
        } else {
            conteo[pieza.tipo] = 1;
        }
    });
    return conteo;
}

//función que devuelve un array con las piezas de un color determinado
/**
 * Esta función devuelve un array con las piezas de un color determinado
 * @param color String "blanco"|"negro"
 * @param piezas Array de piezas en el que se buscará
 * @return Array de piezas del color indicado
 */
function listarPorColor(color, piezas) {
    return piezas.filter(p => p.color === color);
}


//Pruebas del ejercicio 1
console.log("EXAMEN RA4 - MANUEL MORENO BELLÓN");
console.log("=== Ejercicio 1: Modelo de datos y utilidades básicas ===");
console.log(buscarPieza("P10", piezasIniciales)); //debe devolver la pieza P10
console.log(contarPorTipo(piezasIniciales)); //debe devolver {rey: 2, reina: 2, torre: 4, alfil: 4, caballo: 4, peon: 16}
console.log(listarPorColor("blanco", piezasIniciales)); //debe devolver un array con las 16 piezas blancas



/* =========================
   EJERCICIO 2
   Gestión de capturas e integridad de datos
   ========================= */

//función a la que se le pasa una pieza y si la encuentra la devuelve con capturada true
/**
 * Esta función marca una pieza como capturada si la encuentra por id
 * @param id String
 * @param piezas Array de piezas en el que se buscará
 * @return pieza capturada || null
 */
function capturarPieza(id, piezas) {
    const pieza = buscarPieza(id, piezas);
    if (pieza && !pieza.capturada) {
        pieza.capturada = true;
        return pieza;
    }
    return null;
}

//función que devuelve un array con las piezas capturadas
/**
 * Esta función devuelve un array con las piezas capturadas
 * @param piezas Array de piezas en el que se buscará
 * @return Array de piezas capturadas
 */
function obtenerCapturadas(piezas) {
    return piezas.filter(p => p.capturada);
}

/*función que devuelve un objeto como
  {
    total: 16,
    capturadas: 5,
    porcentaje: 31.25 (dos decimales)
  }
*/
/**
 * Esta función devuelve un objeto con porcentajes de captura
 * @param piezas Array de piezas en el que se buscará
 * @return Object {total, capturadas, porcentaje}
 */
function porcentajeCapturas(piezas) {
    const total = piezas.length;
    const capturadas = obtenerCapturadas(piezas).length;
    let porcentaje = (capturadas / total) * 100;
    porcentaje= parseFloat(porcentaje.toFixed(2)); //Redondea a 2 decimales
    return {
        total: total,
        capturadas: capturadas,
        porcentaje: porcentaje
    };
}

//Pruebas del ejercicio 2
console.log("=== Ejercicio 2: Gestión de capturas e integridad de datos ===");
console.log(capturarPieza("P5", piezasModificado)); //debe devolver la pieza P5 con capturada true
console.log(capturarPieza("P5", piezasModificado)); //debe devolver null (ya estaba capturada)
console.log(capturarPieza("P18", piezasModificado));
console.log(capturarPieza("P13", piezasModificado));
console.log(capturarPieza("P19", piezasModificado));
console.log(capturarPieza("P17", piezasModificado));
console.log(capturarPieza("P11", piezasModificado));
console.log(capturarPieza("P12", piezasModificado));
console.log(capturarPieza("P1", piezasModificado));
console.log(capturarPieza("P3", piezasModificado));
console.log(capturarPieza("P32", piezasModificado));
console.log(obtenerCapturadas(piezasModificado)); //debe devolver un array con todas las piezas capturadas justo arriba
console.log(porcentajeCapturas(piezasModificado)); //debe devolver {total: 32, capturadas: 10, porcentaje: 31.25}


/* =========================
   EJERCICIO 3
   Estadísticas, puntuación y ranking
   ========================= */


/**
 * Valores estándar de las piezas para puntuación
 */
const valores = {
  rey: 1000,
  reina: 9,
  torre: 5,
  alfil: 3,
  caballo: 3,
  peon: 1
};

//función para calcular la puntuación total de las piezas no capturadas
/**
 * Esta función calcula la puntuación total de las piezas no capturadas
 * @param piezas Array de piezas en el que se buscará
 * @param valores Object con los valores de las piezas
 * @return Number puntuación total
 */
function calcularPuntuacionTotal(piezas, valores) {
    let total = 0;
    piezas.forEach(p => {
        if (!p.capturada) {
            total += valores[p.tipo] || 0; //El 0 es por si se mete una pieza con tipo que no existe
        }
    });
    return total;
}

/*función para generar un ranking de piezas por valor ordenado por potencia
 [
    {id: "...", tipo: "...", color: "...", potencia: ...}
    ...
 ]
 */
/**
 * Esta función genera un ranking de piezas ordenadas por potencia (valor x 1 si no capturada, 0 si capturada)
 * @param piezas Array de piezas en el que se buscará
 * @param valores Object con los valores de las piezas
 * @return Array de piezas ordenadas por potencia
 */
function rankingPiezas(piezas, valores){
    const ranking = piezas.map(p => {
        return {
            id: p.id,
            tipo: p.tipo,
            color: p.color,
            potencia: p.capturada ? 0 : (valores[p.tipo] || 0)
        };
    });
    ranking.sort((a, b) => b.potencia - a.potencia);
    return ranking;
}

//Pruebas del ejercicio 3
console.log("=== Ejercicio 3: Estadísticas, puntuación y ranking ===");
console.log("Puntuación total de piezas no capturadas (array inicial):", calcularPuntuacionTotal(piezasIniciales, valores));
console.log("Puntuación total de piezas no capturadas (array tras capturas):", calcularPuntuacionTotal(piezasModificado, valores));
console.log("Ranking de piezas por potencia (array inicial):", rankingPiezas(piezasIniciales, valores));
console.log("Ranking de piezas por potencia (array tras capturas):", rankingPiezas(piezasModificado, valores));


/* =========================
   EJERCICIO 4
   Exportación y mini-interpretador de comandos
   ========================= */

/*función que devuelve un string JSON con
 {
    piezas: [...],
    puntuacion: número,
    fecha: "2025-11-10T12:13:00.222Z"
 }
*/
/**
 * Esta función exporta el estado actual del juego a JSON
 * @param piezas Array de piezas en el que se buscará
 * @param valores Object con los valores de las piezas
 * @return String JSON con el estado del juego
 */
function exportarEstado(piezas, valores) {
    const estado = {
        piezas: piezas,
        puntuacion: calcularPuntuacionTotal(piezas, valores),
        fecha: "2025-11-10T12:13:00.222Z"
    };
    return JSON.stringify(estado, null, 4);
}

/*función que interpreta comandos simples para capturar piezas o listar capturadas
 Comandos:
 - "capturar ID"  -> devolver la pieza capturada (copia)
 - "listar COLOR" -> lista las piezas de ese color
 - "info ID "   -> devuelve la pieza encontrada
 - "capturadas"   -> usar obtenerCapturadas
 - "ranking"   -> usar rankingPiezas
*/
/**
 * Esta función interpreta comandos simples para capturar piezas o listar capturadas
 * @param texto String comando a interpretar
 * @param piezas Array de piezas que se usarán
 * @param valores Object con los valores de las piezas
 * @return String resultado del comando
 */
function procesarComando(texto, piezas, valores) {
    texto = texto.split(" ");
    const comando = texto[0].toLowerCase();

    switch (comando) {
        case "capturar":
            if (texto.length < 2) return "Error: Falta ID de pieza.";
            const piezaCapturada = capturarPieza(texto[1], piezas);
            return piezaCapturada ? `Pieza capturada: ${JSON.stringify(piezaCapturada)}` : "Pieza no encontrada o ya capturada.";

        case "listar":
            if (texto.length < 2) return "Error: Falta color.";
            const color = texto[1].toLowerCase();
            const piezasColor = listarPorColor(color, piezas);
            return `Piezas de color ${color}: ${JSON.stringify(piezasColor)}`;

        case "info":
            if (texto.length < 2) return "Error: Falta ID de pieza.";
            const piezaInfo = buscarPieza(texto[1], piezas);
            return piezaInfo ? `Información de la pieza: ${JSON.stringify(piezaInfo)}` : "Pieza no encontrada.";

        case "capturadas":
            const capturadas = obtenerCapturadas(piezas);
            return `Piezas capturadas: ${JSON.stringify(capturadas)}`;

        case "ranking":
            const ranking = rankingPiezas(piezas, valores);
            return `Ranking de piezas: ${JSON.stringify(ranking)}`;

        default:
            return "Error: Comando no reconocido.";
    }
}
//Pruebas del ejercicio 4
console.log("=== Ejercicio 4: Exportación y mini-interpretador de comandos ===");
console.log("Exportar estado del juego (array inicial):", exportarEstado(piezasIniciales, valores));
console.log("Exportar estado del juego (array tras capturas):", exportarEstado(piezasModificado, valores));
console.log("Comando: 'capturar P3'\n",procesarComando("capturar P3", piezasModificado, valores));
console.log("Comando: 'listar negras'\n",procesarComando("listar negras", piezasModificado, valores));
console.log("Comando: 'info P7'\n",procesarComando("info P7", piezasModificado, valores));
console.log("Comando: 'capturadas'\n",procesarComando("capturadas", piezasModificado, valores));
console.log("Comando: 'ranking'\n",procesarComando("ranking", piezasModificado, valores));
console.log("Comando: 'probar inválido'\n",procesarComando("probar inválido", piezasModificado, valores));
console.log("Comando: 'info'\n",procesarComando("info", piezasModificado, valores));
