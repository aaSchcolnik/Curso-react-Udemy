import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });

    // Esta es una manera de descomponer el objeto formState cuando
    // no estamos retornando sus valores directamente en useForm
    // el retorno en useForm se hizo return{...formState}
    // const { username, email, password } = formState;


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

            <h1>Formulario con Custom Hook</h1>
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
                type="text"
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value = { email }
                onChange={ onInputChange }
            />

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

        </>



    )
}
