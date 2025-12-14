/*Dado este formulario:
<form id="login">
 <input type="text" id="user" placeholder="Usuario" required>
 <input type="password" id="pass" placeholder="Contraseña" required>
 <button>Entrar</button>
</form>
<p id="msg"></p>
Valida en JS:
1. Usuario debe tener mínimo 3 caracteres.
2. Contraseña mínimo 6 caracteres.
3. Si falla → mensaje en rojo.
4. Si todo OK → mensaje verde: “Acceso permitido”.
5. Evita el envío real (event.preventDefault()).*/

const form = document.getElementById('login');
const usuario = document.getElementById('user');
const pass = document.getElementById('pass');
const mensaje = document.getElementById('msg');
const patronUsuario  = /^[a-zA-Z0-9]{3,}$/
const patronContrasena = /^[a-zA-Z0-9]{6,}$/

function validarFormulario(){
    let valido = true;
    if(!patronUsuario.test(usuario.value.trim())){
        valido = false;
    }else if(!patronContrasena.test(pass.value.trim())){
        valido = false;
    }
    return valido;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    if(validarFormulario()){
        mensaje.style.color = 'green';
        mensaje.textContent = 'Acceso permitido';
    }else{
        mensaje.style.color = 'red';
        mensaje.textContent = 'Acceso no permitido';
    }
    form.reset();
})