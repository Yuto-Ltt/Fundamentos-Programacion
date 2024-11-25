//Imprime los números del 1 al 10.
let A = 1;
while (A <= 10) {
    console.log(A);
    A++;
}

//Imprime los números pares entre 1 y 20.
let B = 1;
while (B <= 20) {
    if (B % 2 === 0) {
        console.log(B);
    }
    B++;
}

//Imprime los números impares entre 1 y 20.
let c = 1;
while (c <= 20) {
    if (c % 2 !== 0) {
        console.log(c);
    }
    c++;
}


//Calcula el factorial de un número.
let x = 5; 
let resultado = 1;
let d = 1;

while (d <= x) {
    resultado *= d; 
    d++;   
}
console.log(`El factorial de ${x} es ${resultado}`);    

//Imprime los números del 10 al 1 en orden inverso.
let e = 10;

while (e >= 1) {
    console.log(i);
    e--; 
}

//Imprime la tabla de multiplicar del 7.
let f = 1;
const numero = 7;

while (f <= 10) {
    console.log(`${numero} x ${f} = ${numero * f}`);
    f++; 
}

//Suma los primeros 10 números.
let suma = 0;
let g = 1;

while (g <= 10) {
    suma += g; 
    g++; 
}
console.log(`La suma de los primeros 10 números es ${suma}`);

//Imprime los primeros 10 términos de la serie Fibonacci.
let a = 0; 
let b = 1; 
let count = 0; 

console.log(A);
count++;

while (count < 10) {
    console.log(b); 
    let siguiente = a + b; 
    a = b; 
    b = siguiente; 
    count++; 
}




//Cuenta cuántos números entre 1 y 50 son divisibles por 5.
let contador = 0;
let h = 1;

while (h <= 50) {
    if (h % 5 === 0) {
        contador++; 
    }
    h++;
}
console.log(`Hay ${contador} números entre 1 y 50 que son divisibles por 5.`);

//Encuentra el primer número divisible por 7 después de 100.
let i = 101; 

while (true) {
    if (i % 7 === 0) {
        console.log(`El primer número divisible por 7 después de 100 es ${i}.`);
        break; 
    }
    i++; 
}