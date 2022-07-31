const carrito = [
    {
        nombre: 'Monitor 27 Pulgadas',
        precio: 500
    },
    {
        nombre: 'Television',
        precio: 100
    },
    {
        nombre: 'Tablet',
        precio: 200
    },
    {
        nombre: 'Audifonos',
        precio: 300
    },
    {
        nombre: 'Teclado',
        precio: 400
    },
    {
        nombre: 'Celular',
        precio: 700
    }
];


carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: $${producto.precio}`);
});


const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre} - Precio: $${producto.precio}`;
});
console.log(nuevoArreglo);

