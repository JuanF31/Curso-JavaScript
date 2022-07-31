const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    imagen: "imagen.jpg"
};

const { nombre, precio, disponible, imagen, noExiste = false } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(imagen);
console.log(noExiste);