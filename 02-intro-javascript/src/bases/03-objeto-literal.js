
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321,
    }
};
// en muchos navegadores se estandarizo que los objetos aparecen en orden alfabetico
console.log(persona);

//const persona2 = persona; //realmente estamos copiando la referencia de la memoria
// persona2.nombre = 'Peter'; esta asignacion jamas se debe de hacer, porque esta mutacion no va a ser aceptada

//para crear un clon lo mas facil es crear un nuevo objeto y colocarle las mismas propiedades
//para evitar la flojera de escribirlo todo de nuevo, podemos usar el operador spread

//Podemos crear un clon con las mismas propiedades en un mismo objeto
//solo debemos usar 3 puntos y el nombre del objeto
const persona2 = {...persona};
persona2.nombre = 'Peter';

//javascript ejecuta el programa linea por linea
console.log(persona);
console.log(persona2);;