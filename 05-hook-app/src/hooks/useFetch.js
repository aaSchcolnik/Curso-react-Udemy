import { useEffect, useState } from "react";


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true, //por defecto al montar el hook estoy cargando
        hasError: null, 
    })


    //queremos disparar la peticion fetch (existe axios)
    const getFetch = async () => {
        // cuando esta cargando el estado de loading es true
        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url);
        const data = await resp.json();

        // cuando ya se cargo el estado de loading es false
        setState({
            data, //data: data
            isLoading: false,
            hasError: null,
        })

        // console.log(data);
    }
    
    useEffect(() => {
        getFetch();
    }, [url])
    

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };

}

