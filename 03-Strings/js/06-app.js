const producto = 'Monitor 20 Pulgadas';

//.repeat permite repetir una cadena de texto

const texto = ' en Promocion'.repeat(3)

console.log(texto)
console.log(`${producto} ${texto} !!!`)

//Split divide un string
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "))

const hoobies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hoobies.split(", "))

const tweet = "Aprendiendo JavaScript Moderno #JSModernoConJuan"
console.log(tweet.split("#"))