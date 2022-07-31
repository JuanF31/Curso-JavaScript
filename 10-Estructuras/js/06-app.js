const usuario = true;
const puedePagara = true;

if(usuario && puedePagara){
    console.log('Si puedes comprar')
}else if(!puedePagara && !usuario){
    console.log('No, no puedes comprar')
}else if(!usuario){
    console.log('Inicia sesion o saca una cuenta')
}else if(!puedePagara){
    console.log('Fondos insuficientes')
}
