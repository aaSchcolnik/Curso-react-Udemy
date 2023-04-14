//Funciones en Js

//Es una funcion que regresa una string que concatena la palabra Hola con nombre
/* function saludar(nombre) {
    return `Hola, ${nombre}`;
} */
// no es recomendable llevarlo a cabo de esta manera porque podemos sobreponer el valor de saludar

//Si lo hacemos de esta manera ya no podemos sobreponer el valor de saludar
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

//como transformar esta funcion a una funcion de flecha
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
} // una ventaja de la funcion de flecha es que si la funcion lo unico que hace es tener un return
// podemos hacer lo siguiente:

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

//El funcionamiento es el mismo en caso de usar function o arrow function
//solamente ahorra texto

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

//Aqui tengo una funcion de flecha que lo unico que hace es un return
const getUser = () => {
    return{
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

//Hagamos lo mismo pero sin el return
const getUser2 = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
})

const user = getUser();
const user2 = getUser2();

console.log(user);
console.log(user2);

//Tarea

function getUsuarioActivo(nombre){
    return{
        uid: 'ABC567',
        username: nombre
    }
}

//1. Transformar a funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABC567',
    username: nombre
}) //resultado correcto

const usuarioActivo = getUsuarioActivo('Fernando');
const usuarioActivo2 = getUsuarioActivo2('Fernando');
console.log(usuarioActivo);
console.log(usuarioActivo2)