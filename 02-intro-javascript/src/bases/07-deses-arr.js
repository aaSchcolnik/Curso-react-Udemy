//Desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]); // asi podemos escribir todos los personajes pero es poco viable

//-------------------------
const [p1] = personajes;// toma el primer valor
const [, p2] = personajes;// segundo valor
const [, , p3] = personajes; // tercer valor

console.log( p3 ) //f2 para cambiar nombre de variable

//-------------------------
const retornaArreglo = () =>{
    return ['ABC', 123];
}

const arr = retornaArreglo();
const [letras, numeros] = retornaArreglo();

console.log(arr);
console.log(letras, numeros);

//-------------------------
//Tarea

const uState = (valor) => {
    return [valor, () =>{ console.log('Hola Mundo')}];
}

const arr1 = uState('Goku');
console.log(arr1);
arr1[1](); // imprime el hola mundo

// 1. el primero valor del arreglo se llamara nombre
// 2. el segundo se llamara setNombre

const [nombre, setNombre] = uState('Goku');
console.log(nombre);
setNombre(); // imprime el hola mundo - es mucho mejor usar esta manera en vez de arr1[1]()