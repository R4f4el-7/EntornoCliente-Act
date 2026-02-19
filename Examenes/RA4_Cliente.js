/* =========================
   DATOS AUTOR (ELIMINAR ESTE COMENTARIO)
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



/* =========================
   EJERCICIO 2
   Gestión de capturas e integridad de datos
   ========================= */



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


/* =========================
   EJERCICIO 4
   Exportación y mini-interpretador de comandos
   ========================= */


