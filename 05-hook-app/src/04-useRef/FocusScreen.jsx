import { useRef } from "react"



export const FocusScreen = () => {

    const inputRef = useRef(); //nos ayuda a mantener una referencia y
    //cuando esta referencia cambia, no disparamos una re-rendirizacion del componente

    const onClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input
            ref={ inputRef }
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control"
        />

    <button 
        className="btn btn-primary mt-2"
        onClick={ onClick}
        >
        Set Focus
    </button>



    </>

    )
}
