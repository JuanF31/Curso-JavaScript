"use strict";
//Habilita el modo estricto

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

//Congela el objeto, no permite su modificacion ni eliminacion
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imagen.png"

console.log(producto);
console.log(Object.isFrozen(producto));