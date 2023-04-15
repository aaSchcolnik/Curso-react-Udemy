import React from 'react'
import ReactDOM from 'react-dom/client'

import {FirstApp} from './FirstApp'
import { CounterApp } from './CounterApp'

import './styles.css';


//usualmente todo en React inicia con un componente o un functional component
//ese es el punto de entrada de la aplicacion, se llaman asi porque son
//basados en funciones, las clases ya no son aconsejadas para usar en react 

//se recomienda siempre trabajar en modo estricto
// aqui estamos llevando a cabo el renderizado de nuestro componente
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode> 
        {/* <CounterApp value={10}/> */}
        <FirstApp />
    </React.StrictMode>
)


