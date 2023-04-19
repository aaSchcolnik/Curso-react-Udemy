import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/components/hooks/useFetchGifs";

//esto sirve para hacer mocks de librerias, tanto nuestras como de terceros
jest.mock('../../src/components/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
    
    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={ category }/>);
        screen.debug();

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });

    test('debe de mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false //queremos que ya haya imaganes, por ende que el arreglo no este vacio y no haya necesidad de cargar
        })

        //gifGrid no tiene como objetivo evaluar el useFetchGifs, no es su tarea
        
        //hacer un mock completo de un Custom Hook
        render(<GifGrid category={ category }/>);
        screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);

    });


})

