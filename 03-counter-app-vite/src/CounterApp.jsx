import {useState} from 'react'

import PropTypes from 'prop-types';
// https://es.reactjs.org/docs/events.html documentacion para eventos


export const CounterApp = ( { value } ) => {
    
    console.log('renderizado');

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        // console.log(event);
        setCounter( counter + 1 ); // manera de sumarle 1
        // setCounter( (c) => c + 1 ); manera de sumarle 1
    } 

    const handleSubtract = () => {
        setCounter( counter - 1 );
    }

    const handleReset = () => {
        setCounter( value );
    }
    
    return (
        <>

        <h1>CounterApp</h1>

        <h2> { counter } </h2>

        <button onClick={ handleAdd } > +1 </button>
        <button onClick={handleSubtract}> -1 </button>
        <button aria-label="btn-reset" onClick={handleReset}> Reset </button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

