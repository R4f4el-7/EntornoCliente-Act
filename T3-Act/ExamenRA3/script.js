document.getElementById("abrirPopupBtn").addEventListener("click", () => {
  const popup = window.open(
    "",
    "popup",
    "width=400px,height=100px,resizable=yes"
  );

  if (!popup) {
    alert("El navegador ha bloqueado la ventana emergente.");
    return;
  }

  // Generamos el contenido del popup
  const contenido = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Popup Dinámico</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 5px;
        }
      </style>
    </head>
    <body>
      <h2>Popup generado desde JavaScript</h2>
      <p>Este contenido no viene de un archivo HTML, sino que se construye desde JS.</p>
      <p>Puedes agregar más contenido dinámicamente.</p>
	  <h2>Popup generado desde JavaScript</h2>
      <p>Este contenido no viene de un archivo HTML, sino que se construye desde JS.</p>
      <p>Puedes agregar más contenido dinámicamente.</p>

    </body>
    </html>
  `;

  popup.document.open();
  popup.document.write(contenido);
  popup.document.close();

  // Ajustamos tamaño cuando termine de cargar
  popup.onload = () => ajustarTamanoPopup(popup);
});

/**
 * Ajusta el tamaño de la ventana al contenido.
 * @param {Window} win
 */
function ajustarTamanoPopup(win) {
  const body = win.document.body;
  const width = body.scrollWidth + 90;
  const height = body.scrollHeight + 50;

  win.resizeTo(width, height);
}
