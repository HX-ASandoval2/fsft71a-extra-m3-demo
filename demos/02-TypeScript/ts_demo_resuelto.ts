//! ----- TIPADO DE VARIABLES (Datos Primitivos): -----
//* Tipado "IMPLÍCITO" en "const":
const nombre = "Marge";
//* Tipado "EXPLÍCITO" en "const":
const apellido: string = "Bubbie";

let edad: number = 40;
let tieneMascota: boolean = true;
let noDefinido: undefined = undefined;
let sinDatos: null = null;

//* Permitir cualquier valor:
let otroValor: any = "12345678";
otroValor = 12345678;
otroValor = false;

//* Valor desconocido:
let desconocido: unknown;
desconocido = "Siempreviva 123";

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
function suma(a: number, b: number): number {
  return a + b;
}

function saludar(nombre: string): void {
  console.log(`¡Hola, ${nombre}! ¿Cómo estás?`);
}

function error(mensaje: string): never {
  throw new Error(mensaje);
}

function obtenerNombre(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Marge Simpson");
      // reject("Error al obtener el nombre");
      // ❌ opcionalmente, podría fallar
    }, 2000);
  });
}
// if(typeof obtenerNombre() === "string") {
//   console.log(obtenerNombre());
// }

//? Argumentos:
suma(2, 3);
saludar(nombre);
obtenerNombre().then((nombre) => console.log(nombre));

//! ----- TIPO PERSONALIZADO: -----
type TContacto = {
  email: string;
  celular: number;
};

//! ----- ENUM: -----
enum THobbies {
  CODEAR = "Codear",
  MUSICA = "Escuchar música",
  TELE = "Mirar tele",
}

//! ----- INTERFAZ: -----    DISTINTO DE CLASE
interface IUsuario {
  id: number;
  nombre: string;
  hobbies: THobbies[];
  contacto: TContacto;
}

const lenny: IUsuario = {
  id: 1,
  nombre: "Lenny",
  hobbies: [THobbies.MUSICA, THobbies.MUSICA],
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
interface IPersona {
  edad: number;
}

//* EXTENSIÓN
interface IEmpleado extends IPersona {
  cargo: string;
}

const ned: IPersona = {
  nombre: "Ned",
  apellido: "Flanders",
  edad: 40,
};

const homero: IEmpleado = {
  nombre: "Homero",
  apellido: "Simpson",
  edad: 40,
  cargo: "Jefe de Seguridad",
};

console.log(ned, homero);

//! ----- TIPOS UTILITARIOS: -----
const lisa: Omit<IPersona, "edad"> = {
  nombre: "Lisa",
  apellido: "Simpson",
};

const bart: Partial<IPersona> = {
  nombre: "Bart",
  apellido: "Simpson",
};

const carl: Pick<IEmpleado, "nombre" | "cargo"> = {
  nombre: "Carl",
  cargo: "Empleado",
};

console.log(lisa, bart, carl);

//! ----- INTERSECCIÓN "&": -----
const maggie: IPersona & { apodo: string } = {
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
// type TAnimal = {
//   nombre: string;
// };

//* EXTENSIÓN
type TMascota = TAnimal & {
  nombre: string;
  edad: number;
}

const perro: TAnimal = {
  especie: "perro",
};

const huesos: TMascota = {
  especie: "perro",
  nombre: "Huesos",
  edad: 5,
};

console.log(perro, huesos);

//! ----- TIPOS UTILITARIOS: -----
const ayudanteDeSanta: Omit<TMascota, "nombre"> = {
  especie: "perro",
  edad: 5,
};

const bolaDeNieve: Partial<TMascota> = {
  especie: "gato",
};

console.log(ayudanteDeSanta, bolaDeNieve);

//! ----- UNION TYPES "|": -----
let otraVariable: undefined | string;
console.log(otraVariable); //* undefined
otraVariable = "Valor";

let miVariable: string | number = "Hola Mundo!!!";
miVariable = 1234;

//! ----- ALIAS DE TIPO: -----
// Union con literales de cadena (valores fijos permitidos)
type TRoles = "admin" | "invitado" | "registrado";

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
//* En TypeScript, el operador "as" se usa para hacer "type assertions", decirle explícitamente al compilador qué tipo tiene un valor.
let saludo: unknown = "Hola";

saludo = (saludo as string).length;
