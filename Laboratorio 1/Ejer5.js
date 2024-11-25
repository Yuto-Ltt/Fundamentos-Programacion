//Imprime los números del 1 al 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Imprime los números pares entre 1 y 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Imprime los números impares entre 1 y 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


//Imprime los primeros 10 números múltiplos de 3.
for (let i = 1; i <= 10; i++) {
    console.log(i * 3);
}


//Calcula el factorial de un número.
let n = 5; 
let resultado = 1;
for (let i = 1; i <= n; i++){
    resultado *= i;
 console.log(`El factorial de ${n} es ${resultado}`);
}


//Imprime los números del 10 al 1 en orden inverso.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


//Imprime la tabla de multiplicar del 5.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


//Suma los primeros 10 números.
let suma = 0;

for (let i = 1; i <= 10; i++) {
    suma += i;
console.log(`La suma de los primeros 10 números es ${suma}`);
}

//Imprime los primeros 10 términos de la serie Fibonacci.
let a = 0;
let b = 1;
console.log(a); 
console.log(b); 
for (let i = 3; i <= 10; i++) {
    const siguiente = a + b;
    console.log(siguiente);
    a = b;
    b = siguiente;
}

//Cuenta cuántos números entre 1 y 100 son divisibles por 3.
let contador = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        contador++;
    }
} 
console.log(`Hay ${contador} números entre 1 y 100 que son divisibles por 3.`);
