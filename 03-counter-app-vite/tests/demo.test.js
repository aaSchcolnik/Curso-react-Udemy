
// https://jestjs.io/docs/expect

// Expect y toBe

describe('Pruebas en <DemoComponent/>', () => { 
    
    test('Esta prueba no debe de fallar', () => {
        
        // 1. Inicialización
        const message1 = 'Hola Mundo';
    
        // 2. Estímulo
        const message2 = `Hola Mundo`;
    
        // 3. Observar el comportamiento
        expect( message1 ).toBe( message2 );
        
    });

})
