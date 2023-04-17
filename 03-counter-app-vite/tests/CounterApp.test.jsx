import {CounterApp} from '../src/CounterApp'
import { fireEvent, render, screen} from '@testing-library/react'


//tarea
describe('Pruebas en <CounterApp/>', () => { 

    const initialValue = 100;

    test('Debe de hacer match con el snapshot', () => {

        const{ container } = render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar el valor por defecto de 100', () => {

        render( <CounterApp value={initialValue}/> );
        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('100')

    });

    test('debe de incrementer con el boton +1', () => {

        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('+1') ); //ojo:
        //si existiera otro +1 en el texto esto causara problemas

        expect( screen.getByText( '101' ) ).toBeTruthy();

    });

    test('debe de decrementar con el boton -1', () => {

        render( <CounterApp value = { initialValue } /> );
        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByText( '99' ) ).toBeTruthy();

    });

    test('debe funcionar el boton de reset', () => {

        render( <CounterApp value={initialValue} /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        
        screen.debug();

        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        // fireEvent.click( screen.getByText('Reset') );
        screen.debug();

        expect(screen.getByText( initialValue )).toBeTruthy();

    });


});