import { useState } from "react"


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'strider',
        email: 'fernando@google.com',
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        // console.log(event.target.name)
        const {name, value} = target;
        console.log({name, value});
    }

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
    
        </>



    )
}
