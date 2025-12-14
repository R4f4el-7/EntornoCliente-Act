/*Dado:
    <ul id="menu">
        <li data-op="perfil">Perfil</li>
        <li data-op="config">Configuración</li>
        <li data-op="salir">Salir</li>
    </ul>
Implementa delegación de eventos:
    1. Pon un único addEventListener sobre el <ul>.
2. Detecta qué <li> fue clicado usando event.target.
3. Muestra un mensaje distinto según el data-op*/
const menu = document.getElementById('menu');
menu.addEventListener('click', (event) => {

    const item = event.target;

    if (item.tagName !== 'LI') return;

    const opcion = item.dataset.op;

    switch (opcion) {
        case 'perfil':
            alert('Has hecho clic en Perfil');
            break;
        case 'config':
            alert('Has hecho clic en Configuración');
            break;
        case 'salir':
            alert('Has hecho clic en Salir');
            break;
    }
})