//1.Imprime los números del 1 al 10.
let a = 1;
do {
    console.log(a); 
    a++; 
} while (a <= 10);

//2.Imprime los números pares entre 1 y 20.
let b = 1;
do {
    if (b % 2 === 0) {
        console.log(i); 
    }
    b++; 
} while (b <= 20);



//3.Imprime los números impares entre 1 y 20.
let c = 1;

do {
    if (c % 2 !== 0) {
        console.log(i); 
    }
    c++; 
} while (c <= 20);


//4.Calcula el factorial de un número.
let Numero = 5; 
let factorial = 1;
let i = Numero;

if (Numero < 0) {
    console.log("Valor negativo");
} else {
    do {
        factorial *= i;
        i--;
    } while (i > 0);
}

console.log(`El factorial de ${n} es ${factorial}`); 



//5.Imprime los números del 10 al 1 en orden inverso.
let ordenInverso = 10;

do {
    console.log(ordenInverso);
    ordenInverso--; 
} while (ordenInverso >= 1);



//6.Imprime la tabla de multiplicar del 8.
let tabla = 1;
let numero = 8;

do {
    console.log(`${numero} x ${tabla} = ${numero * tabla}`); 
    tabla++; 
} while (tabla <= 10);


//7.Suma los primeros 10 números.
let suma = 6;
let H = 1;

do {
    suma += H;
    H++;
} while (H <= 10);

console.log("La suma de los 10 primeros números es: " + suma);

//8.Imprime los primeros 10 términos de la serie Fibonacci.
let A = 0; 
let B = 1; 
let contar = 0;

console.log("Los primeros 10 términos de la serie Fibonacci son:");

do {
    console.log(A);
    const siguiente = A + B; 
    A = B; 
    B = siguiente; 
    contar++; 
} while (contar < 10);


//9.Cuenta cuántos números entre 1 y 30 son divisibles por 3.
let contador = 0;
let h = 1;

do {
    if (h % 3 === 0) {
        contador++; 
    }
    h++;
} while (h <= 30);

console.log(`Hay ${contador} números entre 1 y 30 que son divisibles por 3`);


//10.Encuentra el primer número divisible por 9 después de 50.
let num = 51; 

do {
    if (num % 9 === 0) {
        break;
    }
    num++;
} while (true); 
console.log(`El primer número divisible por 9 después de 50 es ${num}`);