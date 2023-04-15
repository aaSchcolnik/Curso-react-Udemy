import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Pruebas en 06-deses-obj', () => { 

    test('usContext debe retornar un objeto', () => {
        
        const clave = 'ABC123';
        const edad = 45;

        const user = usContext({clave, edad});

        expect(user).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
        console.log(user);
    })

})




