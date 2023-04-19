import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/components/hooks/useFetchGifs"


describe('Pruebas en el hook de nuestro useFetchGifs', () => { 

    test('debe de regresar el estado inicial', () => { 

        //por ejemplo que las imagenes esten vacias y que el isloading sea true
        
        //Este render hook regrresa varias cosas..
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    })

    //segunda prueba
    test('debe de retornar un arreglo de imagenes y el isLoading en false', async() => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        
        await waitFor(
            //hay que estar pendiente cuando suceda el cambio
            () => expect( result.current.images.length ).toBeGreaterThan(0)
            // waitFor (espera) a que el largo de images actual sea mayor a 0
            
        );

        //estoy esperando que cuando se carguen las imagenes 

        const { images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    
    
    })

})

