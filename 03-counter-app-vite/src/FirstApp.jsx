

// const newMessage = {
//     message: 'Hola mundo',
//     title: 'Aaron'
// } //existen beneficios al hacerlo de esta manera (teniendo la constante fuera del componente), por ejemplo, react no va a reprocesar cualquier cosa fuera
//del componente FirstApp, en caso de que FistApp deba ser renderizado nuevamente

//al imprimir un arreglo [1,2,3,4,5..] en h1, react lo convierte a string y cada elemento
//se encuentra por separado

import PropTypes from 'prop-types';


export const FirstApp = ({title, subtitle, name}) => {

    
    return (
    <> {/* esto es un fragmento, es un agrupador de otros
    elementos html o jsx, en los cuales tenemos
    nuestro nodo padre y tenemos que regresar por lo menos
    un nodo padre y dentro puede venir cualquier
    cantidad de elementos, lo importante es que siempre
    exista un nodo padre como es este */}

        <h1 data-testid="test-title">{ title }</h1>


        {/* <code>{ JSON.stringify( newMessage ) }</code>  */}
        {/* siempre y cuando lo que 
        se encuentre entre llaves sea una expresion
        y no un objeto podemos llevarlo a cabo, como
        por ejemplo una suma, multiplicacion etc. */}

        <p>{ subtitle }</p>
        <p>{ subtitle }</p>
        <p>{ name }</p>


    </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'Aaron Schcolnik',
    subtitle: 'No hay subtitulo :c',
    // title: 'No hay titulo',
}


