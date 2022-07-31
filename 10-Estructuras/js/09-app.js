const autenticado = true;
const puedePagar = true;

console.log(autenticado && puedePagar ? 'Si puede pagar' : 'No, no estas autenticado');
console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede' : 'Si autenticado, no puede pagar' : 'No, no esta autenticado')