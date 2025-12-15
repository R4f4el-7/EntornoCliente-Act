/*Dado:
<ul id="tareas"></ul>
<button id="add">Añadir tarea</button>
Cuando se pulse el botón:
1. Pide con prompt() una tarea.
2. Crea un <li> con la tarea.
3. Añádelo al <ul>.
4. Cada <li> debe poder borrarse al hacer clic en él.*/
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

