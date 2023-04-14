// Operador condicional ternario
// Es una manera corta de hacer una decision

const activo = true;

/* let mensaje = '';

if (activo) {
  mensaje = 'Activo';
} else {
  mensaje = 'Inactivo';
} */

/* const mensaje = (activo) ? 'Activo' : 'Inactivo';
const mensaje = (activo) ? 'Activo' : null; */

const mensaje = activo && 'Activo';
// Es una manera sencilla de ver un "if"
// si activo es true, entonces mensaje es 'Activo'
// con el uso de && si lo primero es falso lo demas no se ejecuta

console.log(mensaje);