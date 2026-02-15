# TRIVIAS

## ¿Cuál es la salida de los siguientes códigos?

### ❓Pregunta 1

```js
console.log(sum(2, 3));

function sum(a, b) {
  return a + b;
}
```

¿Qué ocurre?
- A) Lanza un error porque sum no está definido aún.
- B) Imprime 5.
- C) Imprime undefined.
- D) Lanza un error de tipo (TypeError).

<details>
  <summary>Respuesta correcta...</summary>
✅ Respuesta correcta: B)
Las funciones declaradas con function son hoisted completas, por lo que se puede llamarlas antes de su definición.
</details>

### ❓Pregunta 2

```js
console.log(0 == "0");
console.log(0 === "0");
```

¿Qué imprime el código?
- A) true y true
- B) false y false
- C) true y false
- D) false y true

<details>
  <summary>Respuesta correcta...</summary>
✅ Respuesta correcta: C)
== hace coerción, así que 0 == "0" es true.
=== compara sin coerción (tipo y valor), entonces 0 === "0" es false.
</details>

### ❓Pregunta 3

```ts
const arr = [1, 2, 3, 4];
const result = arr.filter((n) => n % 2 === 0).map((n) => n * 2);

console.log(result);
```

¿Qué imprime?
- A) [4, 8]
- B) [2, 4, 6, 8]
- C) [2, 4]
- D) [1, 3]

<details>
  <summary>Respuesta correcta...</summary>
✅ Respuesta correcta: A)
filter(n => n % 2 === 0) deja [2, 4].
map(n => n * 2) convierte en [4, 8].
</details>

### ❓Pregunta 4

```js
console.log(1 + "1" - 1);
```

- A) "10"
- B) 0
- C) 10
- D) "11"

<details>
  <summary>Respuesta correcta...</summary>
✅ Respuesta correcta: C)
Paso 1: 1 + "1"  →  "11" (En la suma, se castea el número a string y se concatenan)
Paso 2: "11" - 1  →  10  (En la resta, se castea el string a número y se restan)
</details>

```ts







```

### ❓Pregunta 5

```js
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof []);
```

- A) object, number, undefined, object
- B) null, NaN, undefined, array
- C) object, NaN, object, array
- D) undefined, number, undefined, object

<details>
  <summary>Respuesta correcta...</summary>
✅ Respuesta correcta: A)
📌 Explicación:
typeof null → "object" (esto es un bug histórico en JS).
typeof NaN → "number" (NaN es un valor especial de tipo number).
typeof undefined → "undefined".
typeof [] → "object" (los arrays son objetos).
</details>

### ❓Pregunta 6

```js
console.log(typeof typeof 1);
```

- A) "number"
- B) "NaN"
- C) "string"
- D) "object"
