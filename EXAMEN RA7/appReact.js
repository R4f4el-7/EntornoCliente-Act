const { useState, useEffect, useRef } = React;

function App() {

  // ==============================
  // ESTADOS
  // ==============================

  const [retos, setRetos] = useState([]);
  const [retosFiltrados, setRetosFiltrados] = useState([]);
  const [dificultad, setDificultad] = useState("todas");

  const [retoActual, setRetoActual] = useState(null);

  const [posicionActual, setPosicionActual] = useState(null);
  const [movimientosUsuario, setMovimientosUsuario] = useState([]);

  const [tiempoRestante, setTiempoRestante] = useState(0);
  const [temporizadorActivo, setTemporizadorActivo] = useState(false);

  const [puntuacionTotal, setPuntuacionTotal] = useState(0);

  const [bloqueado, setBloqueado] = useState(false);
  const [resultado, setResultado] = useState("");

  const intervaloRef = useRef(null);

  const FILES = ["a","b","c","d","e","f","g","h"];

  // ==============================
  // FUNCIONES DADAS
  // ==============================

  function esMovimientoCaballoValido(origen, destino) {
    const col1 = FILES.indexOf(origen[0]);
    const fila1 = Number(origen[1]);
    const col2 = FILES.indexOf(destino[0]);
    const fila2 = Number(destino[1]);

    const diffCol = Math.abs(col1 - col2);
    const diffFila = Math.abs(fila1 - fila2);

    return (diffCol === 2 && diffFila === 1) ||
           (diffCol === 1 && diffFila === 2);
  }

  function obtenerMovimientosValidos(posicion) {
    const movimientos = [];
    const col = FILES.indexOf(posicion[0]);
    const fila = Number(posicion[1]);

    const posibles = [
      [2,1],[2,-1],[-2,1],[-2,-1],
      [1,2],[1,-2],[-1,2],[-1,-2]
    ];

    posibles.forEach(p => {
      const nuevaCol = col + p[0];
      const nuevaFila = fila + p[1];

      if (nuevaCol >= 0 && nuevaCol < 8 &&
          nuevaFila >= 1 && nuevaFila <= 8) {

        movimientos.push(FILES[nuevaCol] + nuevaFila);
      }
    });

    return movimientos;
  }
  // ==============================
  // Obligatorio usar estos estados y estas funciones, no se pueden crear 
  // otras para hacer los mismo o similar
  // ==============================
  
  
  
  // ==============================
  // EJERCICIO 1
  // ==============================


  let setRetosGlobal = null;
  let retosGlobal = [];
  React.useEffect(() => {
      setRetosGlobal = setRetos;
  }, []);
  async function cargarRetos() {
    // TODO
      console.log("Cargando retos...");
      try {
          const respuesta = await fetch("retos.json");
          retosGlobal = await respuesta.json();
          if (setRetosGlobal){
                setRetosGlobal(retosGlobal);
          }
      }catch (error) {
          console.log(error);
      }
  }

  function filtrarRetos(nivel) {
    // TODO
      setRetosFiltrados(retos.filter(r => r.dificultad === nivel));
  }

  function seleccionarReto(id) {
    // TODO
      setRetoActual(retos.find(r => r.id === id));

      //Colocamos caballo en posición inicial
      setPosicionActual(retoActual.posicionInicial);
      setMovimientosUsuario(null);
      setTemporizadorActivo(true);

  }

  // ==============================
  // EJERCICIO 3
  // ==============================

  function iniciarTemporizador(segundos) {
    // TODO
      setTiempoRestante(segundos);
      let temporizador = setInterval(null,segundos*1000)
      React.useEffect(() => {
          setTiempoRestante(temporizador)
          if (tiempoRestante===0) {
              detenerTemporizador()
          }
      }, [temporizador]);
      return temporizador;
  }

  function detenerTemporizador() {
    // TODO
      setBloqueado(true)
      setTemporizadorActivo(false)
      React.createElement("p", null, "Se ha parado el tiempo")
  }

  // ==============================
  // EJERCICIO 2
  // ==============================

  function clickCasilla(coord) {
    // TODO
      if (tiempoRestante > 0) {
          setBloqueado(false);
      }

      if (!bloqueado) {
          if (esMovimientoCaballoValido(posicionActual, coord)) {
              setPosicionActual(coord)
              setMovimientosUsuario(movimientosUsuario.append(coord));
              if (movimientosUsuario.includes(retoActual.movimientos)) {
                  detenerTemporizador();
                  setPuntuacionTotal(puntuacionTotal + 100)
              }
              resaltarMovimientos(posicionActual);
          } else {
              console.log("Movimiento inválido");
          }
      }else {
          console.log("Se está reproduciendo la solución");
      }
  }

  // ==============================
  // EJERCICIO 4
  // ==============================

  async function comprobarSolucion() {
    // TODO
      detenerTemporizador();

      for (const m of retoActual.movimientos) {
          React.createElement("p", null, `${m}`)
          setTimeout(null,1000)
      }

      if(movimientosUsuario.values()===retoActual.movimientos.values()) {
          setResultado("CORRECTO");
      }else {
          setResultado("INCORRECTO");
      }

      setBloqueado(false);
  }


  // ==============================
  // RENDER TABLERO
  // ==============================

  function renderTablero() {

    const squares = [];

    const movimientosValidos = posicionActual
      ? obtenerMovimientosValidos(posicionActual)
      : [];

    for (let row = 8; row >= 1; row--) {
      for (let col = 0; col < 8; col++) {

        const coord = FILES[col] + row;
        const esValida = movimientosValidos.includes(coord);

        squares.push(
          React.createElement(
            "div",
            {
              key: coord,
              onClick: () => clickCasilla(coord),
              style: {
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                backgroundColor: esValida
                  ? "#9acd32"
                  : (row + col) % 2 === 0
                  ? "#eee"
                  : "#666",
                color: (row + col) % 2 === 0 ? "#000" : "#fff",
                cursor: bloqueado ? "not-allowed" : "pointer"
              }
            },
            posicionActual === coord ? "♞" : ""
          )
        );
      }
    }

    return React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(8, 60px)",
          gridTemplateRows: "repeat(8, 60px)",
          width: "480px",
          marginTop: "20px"
        }
      },
      squares
    );
  }

  // ==============================
  // RENDER PRINCIPAL
  // ==============================

  return React.createElement(
    "div",
    null,

    React.createElement("h2", null, "RA7 - React Async Caballo"),

    // EJERCICIO 1
	//	BOTóN Cargar retos
      React.createElement("button", {onClick: () => cargarRetos()}, "Cargar retos"),

	//	Lista desplegable retos
      React.createElement("select",
          {value: dificultad,
                    onChange:
                        (ev) => {
                            setDificultad(ev.target.value)
                            filtrarRetos(ev.target.value);}},
                React.createElement("option", {value: "todas"}, "todas"),
                React.createElement("option", {value: "media"}, "media"),
                React.createElement("option", {value: "media-alta"}, "media-alta"),
                React.createElement("option", {value: "alta"}, "alta"),
                React.createElement("option", {value: "muy alta"}, "muy alta")
      ),




	//	Seleccionar reto
      React.createElement("select",
          {value: retoActual,
              onChange: (eve) => seleccionarReto(eve.target.value)},
            retosFiltrados.map(r => React.createElement("option", {key: r.id, value: r.id}, `Reto ${r.id} (${r.dificultad})`))
      ),



    renderTablero(),

    // EJERCICIO 3
	//	tiempoRestante
      //Esta da fallo
      //React.createElement("p", null, `Quedan ${iniciarTemporizador(30)} segundos`),
	
	
	//	puntuación total
      React.createElement("p", null, `Tu puntuación total actual es de ${puntuacionTotal} puntos`),
	
	

	// EJERCICIO 4
	//	BOTÓN Comprobar solución
      React.createElement("button", {onClick: () => comprobarSolucion() }, "Comprobar solución"),
   
   
	// mostrar resultado validación
      React.createElement("p", null, `${resultado}`)


  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));