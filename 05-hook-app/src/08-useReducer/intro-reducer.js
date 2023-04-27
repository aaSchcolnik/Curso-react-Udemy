

const initialState = [{
    id:1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];


const todoReducer = ( state = initialState, action = {} ) => { //si no proporciono nada el estado inicial es initialState
    // la accion le dice al reducer como quiero que cambie el estado

    if ( action.type === '[TODO] add todo' ) {
        return [ ...state, action.payload ]; //...state esta esparciendo el state original o actual
    }

    return state;//en caso de que no se cumpla ninguna condicion regresa el state inicial
}

let todos = todoReducer();

const newTodo = {
    id:2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo, // lo que quiero enviar a la accion o lo que va dentro de la accion

}

todos = todoReducer( todos,  addTodoAction);

console.log(todos);


