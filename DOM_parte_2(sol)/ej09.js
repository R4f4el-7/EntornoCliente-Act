document.addEventListener("keydown", (event) => {
    if (event.key === "r") {
        location.reload();
    }
});

document.getElementById("showState").addEventListener("click", () => {
    console.log(gameState);
});
