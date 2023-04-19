import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory.jsx', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, {target: {value: 'Saitama'}} );
        
        expect(input.value).toBe('Saitama');
        // screen.debug();

    });

    test('Debe de llamar onNewCategory (argumento que envio a la funcion) si el input tiene un valor', () => { 

        const inputValue = 'Saitama';
        // todo??
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory = { onNewCategory } />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputValue} });
        fireEvent.submit( form ); //le aplico el submit al formulario, el submit
        // le manda la configuracion necesaria para que sepa que tendra el evento
        // screen.debug();

        expect( input.value ).toBe('');
        //Punto importante: como hago para saber que esto se disparo y que se disparo con la palabra 'Saitama'?
        //Jest Functions

        expect(onNewCategory).toHaveBeenCalled();//nos dice si la funcion es llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1);//nos dice si la funcion es llamada una cantidad especifica de veces
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); // nos dice que la funcion se llame con cierto valor

    });

    test('No debe de llamar el onNewCategory si input esta vacio', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory = { onNewCategory } />)

        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);

    })


});

