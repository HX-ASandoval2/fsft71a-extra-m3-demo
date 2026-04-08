//? Variables con tipos básicos:
const nombre: string = "Aura Sandoval";
const edad: number = 28;
const precio: number = 99.99;
const temperatura: number = -3;
const activo: boolean = true;

//* Inferencia de tipos:
let age = 30;

//? Arrays tipados:
const tecnologias: string[] = ["TypeScript", "React", "NodeJS"];
const puntajes: number[] = [8.5, 9.0, 7.8];

// console.log(`Usuario: ${nombre}, edad: ${edad} años`);
// console.log(`Tecnologías: ${tecnologias.join(", ")}`);

//? Funciones y tipado:
//* Función con parámetros y retorno tipado:
function calcularPromedio(numeros: number[]): number {
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  return suma / numeros.length;
}

//* Función con parámetros opcional:
function saludar(nombre: string, titulo?: string): string {
  if (titulo) return `Hola ${titulo} ${nombre}`;
  return `Hola ${nombre}`;
}

//* Función void:
function logMensaje(mensaje: string): void {
  console.log(`[LOG ${new Date().toISOString()}]: ${mensaje}`);
}

// console.log(calcularPromedio(puntajes));
// console.log(saludar("Perez", "Dr."));
// console.log(saludar("Pepita"));
// logMensaje("Aplicación iniciada");

// ? Interfaces
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

const usuario: Usuario = {
  id: 1,
  nombre: "Pepa Perez",
  email: "pepita@mail.com",
  activo: true,
};

// console.log(usuario);

// const usuario2:Usuario = {
//     id:2,
//     nombre:"Juan",
//     email:"juan@mail.com"
// }

//* Readonly:

interface Producto {
  readonly id: number;
  nombre: string;
  precio: number;
  stock: number;
  descripcion?: string; //opcional
  imagen?: string;
}

const laptop: Producto = {
  id: 1,
  nombre: "MacBook Pro",
  precio: 2500,
  stock: 15,
};

//? Interfaces en funciones:
function calcularDescuento(producto: Producto, porcentaje: number): number {
  return producto.precio * (porcentaje / 100);
}

function estaDisponible(producto: Producto): boolean {
  return producto.stock > 0;
}

console.log(calcularDescuento(laptop, 10));
console.log(estaDisponible(laptop));

//? Extensión de interfaces:
interface Persona {
  nombre: string;
  edad: number;
}

interface Empleado extends Persona {
  empresa: string;
  salario: number;
}

const desarrollador: Empleado = {
  nombre: "Lucas",
  edad: 25,
  empresa: "TechCorp",
  salario: 2500,
};

console.log(desarrollador);

//? Type personalidos:
//* Union type - puede ser uno o puede ser otro:
type Estado = "activo" | "inactivo" | "pendiente";

const estadoUsuario: Estado = "activo";

type EstadoPedido = "pendiente" | "enviado" | "entregado" | "cancelado";

interface Pedido {
  id: number;
  total: number;
  estado: EstadoPedido; // solo va a aceptar esos 4 valores
}

type Rol = "admin" | "user" | "guest";
