const carrito = [];

//Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
};
const producto2 = {
    nombre: "Celular",
    precio: 800
};
const producto4 = {
    nombre: "Celular 2",
    precio: 800
};

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
};

carrito.unshift(producto3);
console.table(carrito);

// //Elimiar ultimo elemento del arreglo
// carrito.pop();
// console.table(carrito);

// //Eliminar del principio del arreglo
// carrito.shift();
// console.table(carrito);

carrito.splice(1, 1);
console.log(carrito);