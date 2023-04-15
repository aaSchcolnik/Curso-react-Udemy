import {getHeroeById, getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes'


describe('Pruebas en 08-imp-exp', () => { 

    test('Debe retornar un heroe por id', () => {

        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    })
    
    test('getHeroeById debe de retornar undefined si no existe', () => {
    
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);
    
        expect(hero).toBeFalsy();
    
    })
    
    //tarea
    //checar que sean 3 owners de dc
    test('getHeroesByOwner debe de retornar un arreglo de los heroes de DC', () => {
    
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);
    
        // expect(result.owner).toEqual('DC');
        expect(heroes.length).toBe(3); 
        expect(heroes).toEqual([
            {id:1, name:'Batman', owner:'DC'},
            {id:3, name:'Superman', owner:'DC'},
            {id:4, name:'Flash', owner:'DC'}
        ])   
        
        // Seria ideal compararlo contra data ficticia donde queremos que nuestras pruebas sean flexibles
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))

    })
    
    test('getHeroesByOwner debe de retornar un arreglo de los heroes de Marvel', () => {
    
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);
    
        expect(heroes.length).toBe(2);   
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
        
    
    })

})


