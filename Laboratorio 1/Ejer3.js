//Un numero es positivo o negativo o cero
let Positive = 756;
if (Positive > 0) {
    console.log(Positive + " Es un número positivo");
} else if (Positive < 0){
    console.log(Positive + " Es un número negativo");
} else {
    console.log(Positive + " Es cero");
}


//Determina si una persona puede votar conducir o ambas
let edad = 23;
if(edad >= 14 ){
    console.log(edad + " Tiene edad minima para votar y conducir");
}else if (edad = 16){
    console.log(edad + " Tiene edad minima para conducir");
}if(edad < 16){
    console.log(edad + " No tiene la edad minima para votar o conducir");
}

//Verifica si un numero es divisible por 2 o por 3 o por ambas
let numero = 15; 
if (numero % 2 === 0 && numero % 3 === 0) {
    console.log(numero + " Es divisible por 2 y por 3");
} else if (numero % 2 === 0) {
    console.log(numero + " Es divisible por 2");
} else if (numero % 3 === 0) {
    console.log(numero + " Es divisible por 3");
} 


//Verifica el estado del clima
let clima = 12
if(clima < 10){
    console.log(" Es frio")
} else if(clima = 16 ){
    console.log("Es templado")
}if(clima > 25){
    console.log(" Es caliente")
}


//Determina si una cadena tiene entre 5 y 10 caracteres
let Cadena = "Me gusta el pollo con papas del local 23" 
if (Cadena.length >= 5 && Cadena.length <= 10) {
   console.log("La cadena tiene entre 5 y 10 caracteres.");
} else {
    console.log("La cadena no tiene entre 5 y 10 caracteres.");
}



//Verifica si un número está entre 0 y 50, entre 51 y 100, o más de 100.
let Rango = 23;
if (Rango >= 0 && Rango <= 50) {
    console.log("El número está entre 0 y 50");
} else if (Rango >= 51 && Rango <= 100) {
    console.log("El número está entre 51 y 100");
} else if (Rango > 100) {
    console.log("El número es más de 100");
} 

//Verifica si una letra es vocal o consonante, y si es mayúscula o minúscula.
let letra = "A"; 
if (letra.length === 1) {
    if (/[a-zA-Z]/.test(letra)) {
        let Vocal = "aeiouáéíóúAEIOUÁÉÍÓÚ".includes(letra); 
        let tipo = letra === letra.toUpperCase() ? "mayúscula" : "minúscula"; 
        
        if (Vocal) {
            console.log(`La letra '${letra}' es una vocal y es ${tipo}`);
        } else {
            console.log(`La letra '${letra}' es una consonante y es ${tipo}`);
        }
    }
}

//Verifica si un número es múltiplo de 2, 3 o ninguno.
let multiplo = 7; 
if (multiplo % 2 === 0 && numero % 3 === 0) {
    console.log(`El número ${multiplo} es múltiplo de 2 y 3.`);
} else if (multiplo % 2 === 0) {
    console.log(`El número ${multiplo} es múltiplo de 2.`);
} else if (multiplo % 3 === 0) {
    console.log(`El número ${multiplo} es múltiplo de 3.`);
} else {
    console.log(`El número ${multiplo} no es múltiplo de 2 ni de 3.`);
}



//verifica el estado de una bateria(bajo medio alto)
let Bateria = 100
if (Bateria <= 20){
    console.log(Bateria + " Bateria baja conecte el cargador ");
}else if ( Bateria >= 20 && Bateria <= 50){
    console.log(Bateria + " La bateria se encuentra con media carga");
if (Bateria >= 50 && Bateria <= 100){
    console.log(Bateria + "la bateria se encuentra con la mayoria de carga")
}
}


//Determina si un numero es positivo y divisible entre 5
let Positivo5 = 15;
if (Positivo5 > 0) {
    if (Positivo5 % 5 === 0) {
        console.log(`${Positivo5} es positivo y divisible por 5`);
    } else {
        console.log(`${Positivo5} es positivo pero no es divisible por 5`);
    }
} else {
    console.log(`${Positivo5} no es positivo`);
}

