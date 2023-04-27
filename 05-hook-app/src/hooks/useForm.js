import { useState } from "react";


export const useForm = ( initialForm = {} ) => {

    const [formState, setformState] = useState( initialForm );


    const onInputChange = ({ target }) => { //recuerda, lo que esta dentro del parentesis
        //es el evento, al poner {target} es descomponerlo en event.target
        // console.log(event.target.name)
        const { name, value } = target;
            setformState({
                ...formState,
                [ name ]: value, //permite que cambie el valor de name unicamente
        });
    }

    const onResetForm = () => {
        setformState( initialForm );

    }


    return {
        ...formState,
        formState, 
        onInputChange,
        onResetForm,
    }
}


// ------- Formulario que creamos inicialmente ---------
// {
//     username: '',
//     email: '',
//     password: ''

// } 

// ------- Lo desestructuramos de la sig. manera
// const { username, email, password } = formState;