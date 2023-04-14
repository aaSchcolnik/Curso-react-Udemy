


test('Esta prueba no debe de fallar', () => {
    // si aqui no se lanza un error la prueba se toma como si pasara
    if (1 === 0){
        throw new Error('No puede dividir entre cero')
    }
})