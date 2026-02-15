//! ----- TIPADO DE VARIABLES (Datos Primitivos): -----
//* Tipado "IMPLÍCITO" en "const":
const nombre = "Marge";
//* Tipado "EXPLÍCITO" en "const":
const apellido = "Bubbie";

let edad = 40;
let tieneMascota = true;
let noDefinido = undefined;
let sinDatos = null;

//* Permitir cualquier valor:
let otroValor = "12345678";
otroValor = 12345678;
otroValor = false;

//* Valor desconocido:
let desconocido;
desconocido = "Siempreviva 123";
desconocido = true;

const marge = {
  nombre,
  apellido,
  edad,
  tieneMascota,
  noDefinido,
  sinDatos,
  otroValor,
  desconocido,
};

console.log(marge);

//! ----- TIPADO DE FUNCIONES: -----
//? Parámetros y Retorno:
function suma(a, b) {
  return a + b;
}

function saludar(nombre) {
  console.log(`¡Hola, ${nombre}! ¿Cómo estás?`);
}

function error(mensaje: string) {
  throw new Error(mensaje);
}

function obtenerNombre() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Marge Simpson");
      // reject("Error al obtener el nombre");
      // ❌ opcionalmente, podría fallar
    }, 2000);
  });
}

//? Argumentos:
suma(2, 3);
saludar(nombre);
obtenerNombre().then((nombre) => console.log(nombre));

//! ----- TIPO PERSONALIZADO: -----

//! ----- ENUM: -----

//! ----- INTERFAZ: -----

const lenny = {
  id: 1,
  nombre: "Lenny",
  hobbies: ["Escuchar música", "Mirar tele"],
  contacto: {
    email: "lenny@example.com",
    celular: 123456789,
  },
};

console.log(lenny);

//! ----- INTERFAZ - Extensión y Merging: -----
interface IPersona {
  nombre: string;
  apellido: string;
}

//* MERGING

//* EXTENSIÓN

const ned = {
  nombre: "Ned",
  apellido: "Flanders",
  edad: 40,
};

const homero = {
  nombre: "Homero",
  apellido: "Simpson",
  edad: 40,
  cargo: "Jefe de Seguridad",
};

console.log(ned, homero);

//! ----- TIPOS UTILITARIOS: -----
const lisa = {
  nombre: "Lisa",
  apellido: "Simpson",
};

const bart = {
  nombre: "Bart",
  apellido: "Simpson",
};

const carl = {
  nombre: "Carl",
  cargo: "Empleado",
};

console.log(lisa, bart, carl);

//! ----- INTERSECCIÓN "&": -----
const maggie = {
  nombre: "Margaret",
  apellido: "Simpson",
  edad: 1,
  apodo: "Maggie",
};

console.log(maggie);

//! ----- TIPO PERSONALIZADO - Extensión y Merging: -----
type TAnimal = {
  especie: string;
};

//* MERGING: NO PERMITIDO

//* EXTENSIÓN

const perro = {
  especie: "perro",
};

const huesos = {
  especie: "perro",
  nombre: "Huesos",
  edad: 5,
};

console.log(perro, huesos);

//! ----- TIPOS UTILITARIOS: -----
const ayudanteDeSanta = {
  especie: "perro",
  edad: 5,
};

const bolaDeNieve = {
  especie: "gato",
};

console.log(ayudanteDeSanta, bolaDeNieve);

//! ----- UNION TYPES "|": -----
let otraVariable;
otraVariable = "Valor";

let miVariable = "Hola Mundo!!!";
miVariable = 1234;

//! ----- ALIAS DE TIPO: -----
// Union con literales de cadena (valores fijos permitidos)
type TRoles = "";

function tienePermisos(rol: TRoles) {
  if (rol === "admin") {
    return "✅ Acceso total";
  } else if (rol === "registrado") {
    return "📂 Acceso limitado";
  }
  return "🚫 Acceso denegado";
}

console.log(tienePermisos("admin")); // ✅ Acceso total
console.log(tienePermisos("invitado")); // 🚫 Acceso denegado

//! ----- ASERCIÓN DE TIPO (as): -----
// En TypeScript, el operador "as" se usa para hacer "type assertions", decirle explícitamente al compilador qué tipo tiene un valor.
let saludo: unknown = "Hola";

saludo = saludo.length;
