

const nombre = 'Aaron';
const apellido = 'Schcolnik';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`; //esto utiliza javascript para concatenar las variables
const saludo = 'Hola Mundo'; // Template String

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre; //esto regresa un string y el argumento que yo le mande, todo en forma de string
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }` )