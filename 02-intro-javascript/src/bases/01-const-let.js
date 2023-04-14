
// Varaibles y Constantes

// trabajaremos con const y let
// las constantes son variables que no van a cambiar o no se van a renombrar, 
// la mayor parte del tiempo usamos constantes para crear espacios en memoria para almacenar informacion

const nombre = 'Aaron';
const apellido = 'Schcolnik'; // let es una variable que si puede cambiar

let valorDado = 5;
valorDado = 4; //es innecesario volver a escribir la palabra let, el valor de la variable se puede cambiar

console.log(nombre, apellido, valorDado);

if (true) { //Valores Scope, son variables que existen solamente dentro de este ambito o scope
    const nombre = 'Peter';
    let valorDado = 6;

    console.log(valorDado, nombre);
}

console.log(valorDado); // en este momento el valor de la variable es 4, porque una vez terminado el if se borra la memoria y deja de utilizar ese valor de scope
