//Division de 2 numeros decimales
let numero1 = parseFloat(prompt("Introduce el primer número decimal:"));
let numero2 = parseFloat(prompt("Introduce el segundo número decimal:"));

if (numero2 === 0) {
  console.log("No se puede dividir entre cero.");
} else {
  let cociente = Math.floor(numero1 / numero2);  
  let residuo = numero1 % numero2; 

  console.log("EL cociente es: " + cociente);
  console.log("EL Residuo de la division: " + residuo);
}
