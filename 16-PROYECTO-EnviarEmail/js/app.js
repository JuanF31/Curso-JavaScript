// Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



eventListener();
function eventListener() {
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', restearFormulario);
}

// Funciones
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//Valida el formulario
function validarFormulario( e ) {
    if(e.target.value.length > 0){

        //Elimina los errores
        const error = document.querySelector('p.error');
        error ? error.remove() : null;
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){
        validarEmail( e );
    }

    if(er.test(email.value) && email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function validarEmail(campo) {
    if(er.test(campo.target.value)){
        const error = document.querySelector('p.error');
        error ? error.remove() : null;
        campo.target.classList.remove('border', 'border-red-500');
        campo.target.classList.add('border', 'border-green-500');
    }else{
        campo.target.classList.remove('border-green-500');
        campo.target.classList.add('border', 'border-red-500');

        mostrarError('El email no es valido');
    }
}


function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const erroes = document.querySelectorAll('.error');

    if(erroes.length === 0){
        formulario.appendChild(mensajeError);
    }
}

// Envia el email
function enviarEmail( e ){
    e.preventDefault();

    //Mostrar el spinner 
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //Despues de 3 segundo ocultar el spinner y mostrar el mensaje
    setTimeout( () => {
        spinner.style.display = 'none';

        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envio correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        formulario.insertBefore(parrafo, spinner);

        setTimeout( () => {
            parrafo.remove();
            restearFormulario();
        }, 5000);
    }, 3000);
}


// Funcion que resetea el formulario
function restearFormulario(e){
    formulario.reset();
    iniciarApp();
}