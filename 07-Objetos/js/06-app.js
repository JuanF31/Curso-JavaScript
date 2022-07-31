const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas:{
            peso: "1kg",
            medida: "1m"
        },
        fabricacion:{
            pais: 'China'
        }
    }
};

const {nombre, informacion, informacion:{
    medidas,
    medidas:{
        peso,
        medida
    }, 
    fabricacion:{
        pais
    }
}} = producto;
console.log(nombre);
console.log(informacion);
console.log(pais);
console.log(medidas);
console.log(peso);
console.log(medida);
