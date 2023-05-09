import { useContext } from "react";
import { UserContext } from "./context/userContext";


export const HomePage = () => {

    const { user } = useContext( UserContext );

    return (
        <>
            <h1>HomePage <small>{ user?.name }</small></h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 )}
            </pre>

            <button className="btn btn-primary">
                Establecer Usuario
            </button>
        </>

    )
}