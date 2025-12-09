const { Builder, By, Key, until } = require("selenium-webdriver");

(async function testFormularioTorneo() {

    // Abrir Chrome
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Abrir el HTML local
        await driver.get("file:///C:/Users/DAW2/WebstormProjects/ajedrez-compartido/T5_Act/EjercicioRepaso_04_InputTiempoReal/index.html");


        // Obtener elementos
        let nombre = await driver.findElement(By.id("nombre_torneo"));
        let rondas = await driver.findElement(By.id("numero_rondas"));
        let ciudad = await driver.findElement(By.id("ciudad_torneo"));
        let boton = await driver.findElement(By.id("enviar"));

        let errorNombre = By.id("errorNombre");
        let errorRondas = By.id("errorNumeroRondas");
        let errorCiudad = By.id("errorCiudad");

        // --------------------------
        // 🔹 TEST 1: Validaciones incorrectas
        // --------------------------

        await nombre.sendKeys("A");
        await rondas.sendKeys("50");
        await ciudad.sendKeys("1234");

        // Esperar validaciones
        await driver.sleep(5000);

        let txtErrNombre = await driver.findElement(errorNombre).getText();
        let txtErrRondas = await driver.findElement(errorRondas).getText();
        let txtErrCiudad = await driver.findElement(errorCiudad).getText();

        console.log("Errores detectados:");
        console.log("- Nombre:", txtErrNombre);
        console.log("- Rondas:", txtErrRondas);
        console.log("- Ciudad:", txtErrCiudad);

        // Comprobar botón deshabilitado
        let isDisabled = await boton.getAttribute("disabled");
        console.log("Botón deshabilitado:", isDisabled !== null);

        // --------------------------
        // 🔹 TEST 2: Corregir datos (valores válidos)
        // --------------------------

        await nombre.clear();
        await rondas.clear();
        await ciudad.clear();

        await nombre.sendKeys("Torneo Final");
        await rondas.sendKeys("5");
        await ciudad.sendKeys("Madrid");

        await driver.sleep(5000);

        let botonHabilitado = await boton.getAttribute("disabled");
        console.log("Botón habilitado:", botonHabilitado === null);

        // --------------------------
        // 🔹 TEST 3: Envío del formulario
        // --------------------------

        await boton.click();

        let mensajeFinal = await driver.findElement(By.id("mensajeFinal")).getText();

        console.log("Mensaje final:", mensajeFinal);

        // --------------------------
        // RESULTADO FINAL
        // --------------------------
        console.log("\n✔ TEST COMPLETADO CON ÉXITO ✔\n");

    } catch (err) {
        console.error("❌ ERROR EN LA PRUEBA:", err);
    } finally {
        await driver.quit();
    }

})();
