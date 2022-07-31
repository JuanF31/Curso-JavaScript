"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

//Sella el objeto, solo permite modificar las propiedades ya establecidad
Object.seal(producto);

producto.disponible = false;

console.log(producto);

console.log(Object.isSealed(producto));