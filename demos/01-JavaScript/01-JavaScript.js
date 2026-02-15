//* TIPADO DEBIL: JS infiere el tipo de dato
let usuario = "Homero";
let clave = "1234";

//* TIPADO DINÁMICO: JS permite cambiar el tipo de dato
usuario = {
  nombre: "HOMERO",
};
clave = 1234;

//! ERRORES EN TIEMPO DE EJECUCIÓN
console.log(usuario.edad.toFixed(0));

"use strict";

x = 10;

function sumar(a, a) {
  return a + a;
}