// 📌 Variables normales:
const persona = "Homero";
const empleado = persona;
console.log({ persona, empleado });
// console.log({ persona: persona, empleado: empleado });
// { persona: "Homero", empleado: "Homero" }

// 📌 Objeto de ejemplo:
const mascotas = {
	perro: "Huesos",
	gato: "Bola de Nieve",
	elefante: undefined, // ejemplo para valor por defecto
	veterinaria: {
		nombre: "Dr. Nick",
		direccion: "Av. Siempreviva 123"
	}
};

// 🧩 Destructuring individual:
const { perro } = mascotas;
console.log(perro); // "Huesos"

// 🧩 Destructuring + creación de objeto con la propiedad:
const mascotaPerro = { perro };
// const mascotaPerro = { perro };
console.log(mascotaPerro); // { perro: "Huesos" }

// 🧩 Destructuring con renombrado:
const { perro: nombrePerro } = mascotas;
console.log(nombrePerro); // "Huesos"

// 🧩 Destructuring múltiple:
const { gato, perro: nuevoPerro } = mascotas;
console.log(gato);   // "Bola de Nieve"
console.log(nuevoPerro); // "Huesos"

// 🧩 Destructuring con valores por defecto:
const { elefante = "Stampy" } = mascotas;
console.log(elefante);
// "Stampy" (porque mascotas.elefante era undefined)

// 🧩 Destructuring anidado
const {
	veterinaria: { nombre, direccion }
} = mascotas;
console.log(nombre);     // "Dr. Nick"
console.log(direccion);  // "Av. Siempreviva 123"

// 🧩 Destructuring en arrays
const numeros = [10, 20, 30, 40];
const [primero, segundo, ...resto] = numeros;
console.log(primero, segundo); // 10 20
console.log(resto);            // [30, 40]

// 🧩 Destructuring en parámetros de función
function mostrarMascota(
	{ perro, gato, elefante = "Stampy" }: 
	{ perro: string; gato: string; elefante: string | undefined }
) {
	console.log(`🐶 ${perro}, 🐱 ${gato} y 🐘 ${elefante}`);
}
mostrarMascota(mascotas); // 🐶 Huesos, 🐱 Bola de Nieve y 🐘 Stampy