const btn = document.querySelector('#add');
const ul = document.querySelector('ul');

btn.addEventListener('click', (event) => {
    const tarea = prompt("Tarea: ");
    if (tarea) {
        const li = document.createElement('li');
        li.textContent = tarea;
        ul.appendChild(li);
        li.addEventListener('click', (event) => {
            li.remove();
        })
    }
})

