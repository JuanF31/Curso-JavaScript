const producto = 'Monitor 20 Pulgadas';

//.replace para remplazar
console.log(producto)
console.log(producto.replace('Pulgadas', '"'))
console.log(producto.replace('Monitor', 'Monitor Curvo'))

//.slice para cortar
console.log(producto.slice(12))

//Alternativa a slice
console.log(producto.substring(0, 10))


const usuario = 'Juan';
console.log(usuario.substring(0, 1))
console.log(usuario.charAt(0))