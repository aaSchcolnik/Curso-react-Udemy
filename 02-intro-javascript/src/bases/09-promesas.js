// PROMESAS
//import heroes from './data/heroes';
import { getHeroById } from './bases/08-imp-exp';

/* //las promesas se ejecutan una vez que se termine de ejecutar todo lo sincrono
const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        // Tarea
        // importen el getHeroeById
        const heroe = getHeroById(2);
        //console.log(heroe); //si exportamos una constante tambien exporta el uso de console.log y genera "basura"
        
        resolve(heroe);
        //console.log('2 segundos despues')
        reject('No se pudo encontrar el heroe');
    }, 2000 )
}); // resolve se ejecuta cuando la promesa se cumple
// reject se ejecuta cuando la promesa no se cumple

promesa.then( (heroe) => {
    console.log('Heroe', heroe)
})
.catch( err => console.warn( err )) */

// ------------------------------------------------------------

const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
        // Tarea
        // importen el getHeroeById
            const heroe = getHeroById(id);
            if (heroe) {
                resolve(heroe);
            } else{
                reject('No se pudo encontrar el heroe');
            }
        }, 2000 )
    }); 
}

getHeroeByIdAsync(2)
    .then( console.log ) // si solo se manda un argumento se puede omitir el parentesis
    .catch(console.warn);