# FORMULARIOS

[Volver a Inicio](../../README.md)

## 🔹Importancia de los Formularios

- Los formularios son esenciales porque:
  - Son la principal vía de interacción entre el usuario y la aplicación (ej. login, registro, búsqueda, carga de datos).
  - Permiten capturar información del usuario para procesarla en el frontend o enviarla al backend.
  - Son clave en funcionalidades críticas: autenticación, pagos, comentarios, configuraciones, etc.
  - Su correcta implementación mejora la experiencia de usuario (UX) y reduce errores de datos.
  - En React, los formularios se vuelven más importantes porque la UI está basada en estados: mantener los inputs sincronizados con el/los estado/s garantiza que los datos sean fiables y fáciles de manejar.

## 🔹Formularios en React

### 1. Formularios controlados

- El valor de cada input se guarda en el estado con useState.
- Esto asegura que la UI siempre refleje el estado real de la aplicación.

```js
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre enviado:", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### 2. Formularios no controlados

- Usan useRef en lugar de useState.
- Son útiles cuando no necesitás sincronizar cada cambio en tiempo real.

```js
import { useRef } from "react";

function FormUncontrolled() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre enviado:", inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="Escribe tu nombre" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### 3. Manejo de múltiples inputs

- Se recomienda usar un estado objeto para agrupar todos los campos.

```js
const [form, setForm] = useState({ name: "", email: "" });

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
```

### 4. Validación de formularios

- Validar evita errores y mejora la calidad de los datos.

```js
{
  !email.includes("@") && <p style={{ color: "red" }}>Email inválido</p>;
}
```

### 5. Librerías útiles

- [React Hook Form → ligero y rápido.](https://react-hook-form.com/)
- [Formik → ideal para formularios grandes.](<(https://formik.org/)>)
- [Yup → validaciones con esquemas.](https://www.npmjs.com/package/yup)

## 🚀Resumen

- Los formularios son clave en la interacción usuario-aplicación.
- En React, pueden ser controlados (estado) o no controlados (refs).
- Para muchos campos → estado objeto.
- Para validaciones complejas → librerías como React Hook Form, Formik y Yup.

[Volver a Inicio](../../README.md)