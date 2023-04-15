import {FirstApp} from '../src/FirstApp'
import { render } from '@testing-library/react'

describe('Pruebas en <FirstApp/>', () => { 
    
    
    test('Debe hacer match con el snapshot', () => { 

        const title = 'Hola, Soy Goku';

        const {container} = render( <FirstApp title ={title}/> )

        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar el titulo en un h1', () => {

        const title = 'Hola, Soy Goku';
        const {container, getByText} = render( <FirstApp title ={title}/> )
        
        expect( getByText(title) ).toBeTruthy();

        //no es lo recomendado pero puede servir
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toBe(title) //ojo incluso puede fallar por un simple cambio de espacios

        expect(h1.innerHTML).toContain(title)

    })

});


