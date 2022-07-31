const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    imagen: "imagen.jpg"
};

//Agregar nuevas propiedades del objeto
producto.stock = 25;

//Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto)