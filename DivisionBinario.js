// Division de numeros binarios 
let numero1Bin = prompt("Introduce el primer numero binario:");
let numero2Bin = prompt("Introduce el segundo numero binario:");

let numero1 = parseInt(numero1Bin, 2);
let numero2 = parseInt(numero2Bin, 2);

if (numero2 === 0) {
  console.log("No se puede dividir entre cero");
} else {
  let cociente = Math.floor(numero1 / numero2); 
  let residuo = numero1 % numero2;  
  let cocienteBin = cociente.toString(2);
  let residuoBin = residuo.toString(2);

  console.log("Cociente en binario (sin decimales): " + cocienteBin);
  console.log("Residuo en binario: " + residuoBin);
}
