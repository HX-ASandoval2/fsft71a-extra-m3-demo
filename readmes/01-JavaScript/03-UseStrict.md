# 📚 Use Strict en JavaScript (Modo Estricto)

[Volver a Inicio](../../README.md)

- Llega en ECMAScript 5 (2009).
- En JavaScript, `"use strict"` es una directiva que activa el "modo estricto". Este modo introduce cambios y restricciones al lenguaje para ayudar a escribir código más seguro y robusto. Algunas de las características principales de "use strict" son:
  1.  **Elimina algunos errores silenciosos**: Al convertirlos en errores explícitos, facilita la detección y corrección.
  2.  **Previene el uso de variables globales**: Obliga a declarar todas las variables antes de usarlas.
  3.  **Restringe el uso de ciertas palabras clave**: Reserva palabras que podrían ser usadas en futuras versiones de JavaScript.
  4.  **Mejora el rendimiento**: Algunos motores de JavaScript optimizan el código en modo estricto.

## 🛠️EJEMPLOS | Use Strict en JavaScript

- Los siguientes casos dan ERROR (en tiempo de compilación o ejecución) si se encuentra el modo estricto activado.

```js
"use strict";

// ----- EN TIEMPO DE EJECUCIÓN -----

// VARIABLES NO DECLARADAS:
x = 3.14;
// ❌ ReferenceError: x is not defined

// DUPLICAR NOMBRE DE PARÁMETROS:
function sumar(a, a) {
  return a + a;
}
// ❌ SyntaxError: Duplicate parameter name not allowed in this context

// THIS GLOBAL ES "undefined":
function prueba() {
  console.log(this);
}
prueba();
// ❌ En strict mode: this === undefined (no window/global)

// ESCRIBIR EN PROPIEDADES DE SOLO LECTURA:
const obj1 = {};
Object.defineProperty(obj1, "pi", { value: 3.14, writable: false });
obj1.pi = 3.1416;
// ❌ TypeError: Cannot assign to read only property 'pi'

// CREAR PROPIEDADES EN OBJETOS NO EXTENSIBLES:
const obj2 = {};
Object.preventExtensions(obj2);
obj2.nueva = 123;
// ❌ TypeError: Cannot add property nueva, object is not extensible

// DUPLICAR NOMBRES DE PROPIEDADES EN OBJETO LITERAL:
const obj3 = {
  nombre: "Homero",
  nombre: "Marge"
};
// ❌ SyntaxError: Duplicate data property in object literal not allowed in strict mode


// ----- EN TIEMPO DE COMPILACIÓN -----

// ASIGNAR A "arguments":
let arguments = [];
// ❌ SyntaxError: Unexpected eval or arguments in strict mode

// ASIGNAR A "eval":
let eval = 123;
// ❌ SyntaxError: Unexpected eval or arguments in strict mode

// ELIMINAR VARIABLES Y FUNCIONES:
let mensaje = "Hola";
delete mensaje;
// ❌ SyntaxError: Delete of an unqualified identifier in strict mode

// USAR OCTALES ANTIGUOS:
let num = 010; // (octal)
let num2 = \012; // (escape octal en string)
// ❌ SyntaxError: Octal literals are not allowed in strict mode

// USAR with:
with (Math) {
  console.log(random());
}
// ❌ SyntaxError: Strict mode code may not include a with statement

```

[Volver a Inicio](../../README.md)