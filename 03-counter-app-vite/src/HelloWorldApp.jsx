
/* export function App() {
    //document.createElement.....
    return (<h1>Hola Mundo!!!</h1>); //este codigo es conocido como JSX
} */

//otra manera de exportarlo es como default
// export default App, para este caso la importacion seria:
// import App from './HelloWorldApp.jsx'

//Generalmente lo vamos a escribir asi puesto que es mas
//facil de leer y entender
export const HelloWorldApp = () => {
  return (
    <h1>Hello World App</h1>
  )
}


// Manera corta de escribir una arrow function cuando
// solo se tiene un return
/* export const HelloWorldApp = () => <h1>Arrow Function </h1>; */