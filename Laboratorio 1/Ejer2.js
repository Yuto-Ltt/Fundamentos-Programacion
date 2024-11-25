//Un numero es par o impar
let Par_Impar = 8;
if(Par_Impar % 2 === 0) {
    console.log(Par_Impar + "El numero es par");
} else {
    console.log(Par_Impar + "El numero es impar");
}


//Determina si un numero es mayor a 100
let Mayor = 1310;
if(Mayor > 100) {
    console.log(Mayor + "El numero es mayor a 100");
} else {
    console.log(Mayor + "El numero no es mayor a 100");
}


//Verifica si una persona es mayor de edad o puede votar
let Votar = 20; 
if (Votar >= 18){
    console.log("Puede Votar");
}else{
    console.log("No puede votar");
}


//Determina si un años es bisiesto
let año = 1996;
if((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)){
    console.log(año + "El año es bisiesto");
}else{
    console.log("El año no es bisiesto")
}


//Verifica si una cadena tiene menos de 10 Caracteres
let cadena = "Me gusta comer pizza";
if (cadena.length < 10) {
    console.log("La cadena tiene menos de 10 caracteres");
}else{
    console.log("La cadena tiene 10 caracteres o mas");
}



//Verificar si un numero es positivo o negativo
let Positive = 7
if(Positive > 0){
    console.log(Positive + "Es un número positivo");
}else{(Positive < 0)
    console.log(Positive + "Es un número negativo");
}
    

//Veririfica si un numero es dibisible por 2 o por 3
let numero = 15; 
if (numero % 2 === 0 || numero % 3 === 0) {
    console.log(numero + "Es divisible por 2 o por 3");
} else {
    console.log(numero + "No es divisible ni por 2 ni por 3");
}


//Comprueba si una letra es vocal o consonante
let letra = 'a'; 
if ('aeiouAEIOU'.includes(letra)) {
    console.log(letra + "Es una vocal");
}else{(letra.match(/[a-zA-Z]/))
    console.log(letra + "Es una consonante");
} 
   

//Verifica si una persona es adolescemte(13 y 19 años)
let Edad = 22;
if(Edad >= 13 && Edad <= 19) {
    console.log("La persona es adolescente");
}else{
    console.log("La persona no es adolescente");
}


//Comprueba si un número es múltiplo de 5.
let mult = 25;
if (mult % 5 === 0) {
    console.log("El numero es múltiplo de 5");
} else {
    console.log("El numero no es múltiplo de 5");
}
