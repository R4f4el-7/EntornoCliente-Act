const form = document.getElementById("config");
const message = document.getElementById("msg");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const time = Number(form.time.value);
    const increment = Number(form.increment.value);

    if (time <= 0 || increment < 0) {
        message.textContent = "Configuración inválida";
        message.style.color = "red";
        return;
    }

    message.textContent = "Configuración guardada";
    message.style.color = "green";

    console.log({
        time,
        increment,
        color: form.color.value
    });
});
