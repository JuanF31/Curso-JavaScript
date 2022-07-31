const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, index) => {
    if(mes === 'Enero'){
        console.log(`Mes encontrado en la pocision [${index}]`)
    }
});

const indice = meses.findIndex( (i) => i === 'Junio');
console.log(`Mes encontrado en la pocision [${indice}]`);

const index = carrito.findIndex( (articulo) => articulo.nombre === 'Tablet');
console.log(index);

const pocision = meses.indexOf(('Junio'));
console.log(`Mes encontrado en la pocision [${pocision}]`);