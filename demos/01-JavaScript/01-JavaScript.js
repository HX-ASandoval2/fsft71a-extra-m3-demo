function enviarEmail(usuario){
  console.log(usuario.email.toLowerCase())
}

// enviarEmail({ nombre: "Auri" })


//? Tipos de tipado:

//* tipado estático - No es modificable, aquí es el tipo se define, se mantiene, se debe respetar.
//* tipado dinámico - Se refiere a que el tipo puede cambiar.

let edad = 30;
// edad = "treinta"

console.log(edad)

//? Flujo de TypeScript:
//* demo.ts -> TypeScript Compiler (tsc) -> Código JavaScript -> Node Js o el navegador (quien lo ejecute)

function calcularDescuento(precio, porcentaje){
  return precio - (precio * porcentaje / 100)
}

console.log(calcularDescuento("200", 10))
