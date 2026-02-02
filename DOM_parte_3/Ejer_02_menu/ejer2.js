const menu = document.getElementById('menu');
const output = document.getElementById('output');

menu.addEventListener('click', (event) => {
    const li = event.target;
    if (li.tagName === 'LI') {
        const section = li.dataset.section;
        output.textContent = `Sección seleccionada: ${section}`;
    }
});
