import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";





export const Layout = () => {

    const { counter, increment } = useCounter(1);
    
    const { data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);

    // console.log({data, isLoading, hasError});

    const {author, quote} = !!data && data[0]; //si la data tiene un valor, entonces toma el primer valor en data
    //! es negacion, !! es doble negacion, entonces lo anterior es una condicional
    // si !!data es igual a true, entonces regresara la info de data en la posicion 0
    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                (isLoading)
                ? <LoadingQuote /> 
                : <Quote author={author} quote={quote}/>
            }

            <button 
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }>
                Next quote
            </button>

        
        </>
    )
}
