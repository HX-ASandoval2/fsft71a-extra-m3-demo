let age: number = 30;

function calcularDescuentos(precio: number, porcentaje: number): number {
  return precio - (precio * porcentaje) / 100;
}

console.log(calcularDescuentos(200, 10));
