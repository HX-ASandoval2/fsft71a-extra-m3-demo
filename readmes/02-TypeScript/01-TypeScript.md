# RESUMEN: TypeScript

[Volver a Inicio](../../README.md)

## 📌 ¿Qué es TypeScript?

- TypeScript (TS) es un superset de JavaScript, es decir, un lenguaje que extiende a JavaScript agregándole características adicionales.
- Fue creado por Microsoft (2012) para mejorar el desarrollo de aplicaciones grandes y escalables.

## 🔗 Relación con JavaScript

- Todo código JavaScript válido también es válido en TypeScript.
- TypeScript se transpila a JavaScript para que los navegadores y Node.js puedan ejecutarlo.
- No reemplaza a JavaScript, sino que lo complementa con herramientas de desarrollo.

<img src="../assets/js_ts_02.png" style="width: 700px">

## ⚙️ Función en tiempo de compilación

- TypeScript funciona en la fase de compilación (antes de ejecutar el código).
- Permite detectar errores de:
  - Tipado incorrecto (ej: pasar un string donde se espera un número).
  - Propiedades inexistentes en objetos.
  - Parámetros mal definidos en funciones.
- Esto evita que muchos errores lleguen al tiempo de ejecución, donde serían más costosos de corregir.

<img src="../assets/js_ts_01.png" style="width: 700px">

## ✅ Beneficios de utilizar TypeScript

- Tipado estático → detecta errores antes de ejecutar.
- Mejor autocompletado e IntelliSense en editores (VSCode, WebStorm, etc.).
- Mayor mantenibilidad en proyectos grandes.
- Soporte para interfaces, genéricos y enums, que ayudan a organizar mejor el código.
- Escalabilidad: facilita el trabajo en equipos grandes.
- Compatibilidad total con JavaScript: puedes migrar de a poco.

> Por todo esto, es utilizado por múltiples librerías y frameworks.

<img src="../assets/ts_03.png" style="width: 700px">

## 👉 En resumen:

TypeScript es JavaScript con superpoderes: te ayuda a escribir código más seguro, claro y mantenible, detectando errores en la compilación en lugar de en la ejecución.

[Volver a Inicio](../../README.md)