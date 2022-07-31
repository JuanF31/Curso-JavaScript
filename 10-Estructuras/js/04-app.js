//Operador mayor que y menos que

const dinero = 300;
const totalAPagar = 300;
const tarjeta = false;
const cheque = false;

if(dinero >= totalAPagar ){
    console.log('Si podemos pagar');
}else if(cheque){
    console.log('Si tengo un chuque');
}
else if(tarjeta){
    console.log('Si puedo pagar porque tengo la tarjeta');
}
else{
    console.log('Fondos insuficientes');
}