const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`[${indice}]: ${pendiente}`)
});


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200, descuento: true },
    { nombre: 'Audifonos', precio: 400 },
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700 }
];

carrito.forEach( (producto) => console.log(producto.nombre));
carrito.map( (producto) => console.log(producto.nombre));