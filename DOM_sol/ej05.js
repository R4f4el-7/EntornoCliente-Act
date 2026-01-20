board.addEventListener("click", (event) => {
    const square = event.target;
    if (!square.classList.contains("square")) return;

    console.log(`Clicked square: ${square.dataset.pos}`);
});
