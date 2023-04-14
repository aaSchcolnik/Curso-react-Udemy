//Arreglos en JS
// const arreglo = new Array(100); no se recomienda hacerlo asi
// solamente si queremos un tamaño predefinido

const arreglo = [1,2,3,4];

/* arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);  */
//no es recomendable utilizar push
// esto porque modifica el objeto original

// Manera erronea de hacerlo pues cambia ambos arreglos
//let arreglo2 = arreglo;
//arreglo2.push(5);

//tarea
let arreglo2 = [...arreglo, 5]; //no fue necesario colocar llaves {}
// el operador spread (...) crea un nuevo arreglo con los mismos elementos

//metodo muy usado en react "map"
//los arreglos tienen map implicito en su prototipo
//mozilla mdn es la mejor documentacion de react
//const arreglo3 = arreglo2.map();

// crea un arreglo nuevo con los mismos valores en arreglo2 y los multiplicamos por 2
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);