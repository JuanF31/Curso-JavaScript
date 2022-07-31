iniciarApp();

function iniciarApp(){
    console.log('Iniciando app...');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Juan');
}

function usuarioAutenticado(usuario){
    console.log('Auteticando usuario... espere...');
    console.log(`Usuario ${usuario} autenticado exitosamente`);
}