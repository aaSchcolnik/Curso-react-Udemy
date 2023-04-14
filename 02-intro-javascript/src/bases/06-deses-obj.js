// Clase mas importante de la semana
// Desestructuracion de objetos o Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const {nombre} = persona; //extrae lo que yo puse dentro de estas llaves del objeto persona
//basicamente esta escribiendo persona.nombre

//para asignarle otro nombre a la constante se puede escribir asi
const {nombre:nombre2} = persona; //la mayoria de las veces se usa el mismo nombre

//para ahorrar mas lineas de codigo tambien podemos hacer:
const {nombre:nombre3, edad, clave} = persona;

console.log(nombre);
console.log(nombre2);
console.log( nombre3, edad, clave); 
//console.log(persona.edad);
//console.log(persona.clave); //esto es tedioso, por lo que podemos hacer lo siguiente:


// ----------------------------------------------------

const retornaPersona = ( usuario ) => {
    
    const {edad, clave, nombre, } = usuario;
    console.log(usuario);

}

retornaPersona( persona );

// Ahora con la desestructuracion del argumento

const retornaPersona2 = ({ nombre, edad, rango='Capitan' }) => {

    console.log( nombre, edad, rango );

} // en dado caso de que no tenga rango mostrara valor undefined
// pero podemos asignarle un valor por defecto

retornaPersona2( persona );

// ----------------------------------------------------
// 3er ejemplo
const uContext = ({clave, nombre, edad, rango='Capitan'}) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.3232,
            lng: -12.2323
        }
    }

}

const {nombreClave, anios, latlng:latlng2} = uContext(persona); //desestructurando a uContext de acuerdo a lo que tiene dentro

const avenger = uContext( persona );
console.log(avenger);
console.log(nombreClave, anios);
console.log(latlng2);

//Digamos que necesito la latitud y longitud en sus respectivas constantes\
const {nombreClave:nClave, anios:anios2, latlng:{lat, lng}} = uContext(persona); //desestructurando a uContext de acuerdo a lo que tiene dentro
console.log(lat, lng); // objetos anidados convertidos a constantes
