const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild)

// console.log(navegacion);
// console.log(navegacion.childNodes); //Los espacios en blanco son considerados como elementos
// console.log(navegacion.children);

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');
// card.children[1].children[1].textContent = 'Nuevo heading desde traversing de DOM';

// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0].src);

//Traversing del hijo a padre
// console.log(card.parentElement);

// console.log(card.nextElementSibling);
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);