import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'strider',
        email: 'fernando@google.com',
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => { //recuerda, lo que esta dentro del parentesis
        //es el evento, al poner {target} es descomponerlo en event.target
        // console.log(event.target.name)
        const {name, value} = target;
        setformState({
            ...formState,
            [ name ]: value, //permite que cambie el valor de name unicamente
        });

    }


    useEffect(() => { //cada vez que yo cambie el estado de cualquier cosa, se llama este useEffect
        // console.log('useEffect Called!');
    }, []);
    
    useEffect(() => { //cada vez que yo cambie el estado del formulario se llama este useEffect
        // console.log('formState Changed!');
    }, [formState]);
    
    useEffect(() => { //cada vez que yo cambie el estado de email, se llama este useEffect
        // console.log('email Changed!');
    }, [email]);


    return (
        <>

            <h1>Formulario Simple</h1>
            <hr/>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value = { username }
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

        {
            //si username es igual a strider2 muestra un mensaje
            <Message className=" hidden"/>
        }

        </>



    )
}
