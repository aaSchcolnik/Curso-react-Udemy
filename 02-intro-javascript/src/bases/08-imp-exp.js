// Import, export y funciones comunes de arreglos

// import {heroes} from './data/heroes'; export con export const heroes = []

//import heroes from './data/heroes'; //una vez guardado el export default heroes;

//Si queremos importar mas de una cosa aparte de la exportacion por defecto
import heroes, {owners} from '../data/heroes';
//console.log(owners);


//exportacion por defecto
//cuando importamos asi nosotros elegimos el nombre que queremos
//import heroes from './data/heroesdefault';

//cambiando el archivo heroes para tener export default heroes al final

//const getHeroById = (id) => {
//    return heroes.find((heroe) => heroe.id === id); //heroe es el argumento de la funcion
//}// find busca en heroes, de ese arrego busca el valor del id
// y verifica que el id sea igual al que se le pidio

//otra manera de escribirlo incluso con menos codigo
export const getHeroById = (id) => heroes.find( (heroe) => heroe.id == id);

//console.log(getHeroById(2));

export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);
//filter te imprime o te regresa TODOS valores que coincidan con el valor que brindaste
//find te regresa el primer valor que coincida con el valor que brindaste

//console.log(getHeroesByOwner('DC'));