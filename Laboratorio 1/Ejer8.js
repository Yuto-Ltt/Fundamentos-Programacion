//Realiza un programa que solicite al usuario su edad y dependiendo de su respuesta, indique si puede votar.
//Luego, usa un ciclo for para imprimir los años que le faltan hasta la edad de retiro (65 años).

let edad = prompt("Edad:");

edad = parseInt(edad);


if (edad >= 18) {
    console.log("Puede votar.");
}else{
    console.log("No puede votar")
}

let Retiro = 65;

if (edad < Retiro) {
    console.log("Años restantes hasta el retiro");
    for (let i = edad + 1; i <= Retiro; i++) {
        console.log(i);
    }
} 


//Crea un programa que calcule el total a pagar en un restaurante. 
//Elige el tipo de cliente (normal, VIP,miembro) usando switch y aplica un descuento en base a eso.

let total = parseFloat(prompt("Monto de pago:"));

let Cliente = prompt("Numero de cuenta ").toLowerCase();
let miembro = 12345;
let normal = 54321;
let VIP = 1122;

let descuento = 0;


switch (Cliente) {
    case "54321":
        descuento = 0.05; 
        console.log(" Se aplica un descuento del 5%");
        break;
    case "1122":
        descuento = 0.25; 
        console.log(" Se aplica un descuento del 25%");
        break;
    case "12345":
        descuento = 0.45; 
        console.log(" Se aplica un descuento del 45%");
        break;
}

let pagar = total - (total * descuento);
console.log("El total a pagar es: $" + pagar.toFixed(2));

//Escribe un programa que determine si un número es primo utilizando un ciclo while. 
//Luego, imprime todos los números primos entre 1 y el número dado.

let numero = parseInt(prompt("Numero que desee conocer"));


let Primo = true;
if (numero <= 1) {
    Primo = false;
} else {
    let i = 2;
    while (i <= Math.sqrt(numero)) {
        if (numero % i === 0) {
            Primo = false; 
            break; 
        }
        i++;
    }
}


console.log(numero + (Primo ? " es primo." : " no es primo."));


console.log("Números primos entre 1 y " + numero + ":");
let h = 2; 
while (h <= numero) {
    Primo = true; 
    let g = 2;
    while (g <= Math.sqrt(h)) {
        if (h % g === 0) {
            Primo = false; 
            break; 
        }
        g++;
    }
    if (Primo) {
        console.log(h); 
    }
    h++; 
}

//Realiza un programa que determine el signo zodiacal basado en el día y mes de nacimiento del usuario
//utilizando if-else anidados.

let dia = parseInt(prompt("Dia de nacimiento (1-31):"));
let mes = parseInt(prompt("Mes de nacimiento (1-12):"));

let signo;


if (mes === 1) {
    if (dia <= 19) {
        signo = "Capricornio";
    } else {
        signo = "Acuario";
    }
} else if (mes === 2) {
    if (dia <= 18) {
        signo = "Acuario";
    } else {
        signo = "Piscis";
    }
} else if (mes === 3) {
    if (dia <= 20) {
        signo = "Piscis";
    } else {
        signo = "Aries";
    }
} else if (mes === 4) {
    if (dia <= 19) {
        signo = "Aries";
    } else {
        signo = "Tauro";
    }
} else if (mes === 5) {
    if (dia <= 20) {
        signo = "Tauro";
    } else {
        signo = "Geminis";
    }
} else if (mes === 6) {
    if (dia <= 20) {
        signo = "Geminis";
    } else {
        signo = "Cáncer";
    }
} else if (mes === 7) {
    if (dia <= 22) {
        signo = "Cancer";
    } else {
        signo = "Leo";
    }
} else if (mes === 8) {
    if (dia <= 22) {
        signo = "Leo";
    } else {
        signo = "Virgo";
    }
} else if (mes === 9) {
    if (dia <= 22) {
        signo = "Virgo";
    } else {
        signo = "Libra";
    }
} else if (mes === 10) {
    if (dia <= 22) {
        signo = "Libra";
    } else {
        signo = "Escorpio";
    }
} else if (mes === 11) {
    if (dia <= 21) {
        signo = "Escorpio";
    } else {
        signo = "Sagitario";
    }
} else if (mes === 12) {
    if (dia <= 21) {
        signo = "Sagitario";
    } else {
        signo = "Capricornio";
    }
} 

console.log("Tu signo zodiacal es: " + signo);

//Escribe un programa que permita ingresar una serie de calificaciones 
//Determine la cantidad de aprobados y reprobados usando while y if-else.

let aprobados = 4;
let reprobados = 6;

while (true) {
    let calificacion = parseFloat(prompt("Calificación (o -1 para terminar):"));
    
    
    if (calificacion >= 0 && calificacion <= 10) {        
        if (calificacion >= 6) {
            aprobados++;
        } else {
            reprobados++;
        }
    } else {
        console.log("Calificacion no valida");
        break;
    }
}

console.log("Cantidad de aprobados: " + aprobados);
console.log("Cantidad de reprobados: " + reprobados);

//Haz un programa que simule un cajero automático
//permitiendo varias transacciones con switch y repitiendo el proceso hasta que el usuario decida salir.
let saldo = 500; 
let continuar = true;

while (continuar) {
  
    let opcion = parseInt(prompt(`Cajero Automático\n1. Consultar Saldo\n2. Depositar\n3. Retirar\n4. Salir\nElige una opción:`));

    switch (opcion) {
        case 1:
            console.log(`Tu saldo actual es: $${saldo}`);
            break;

        case 2:
            let deposito = parseFloat(prompt(" Cantidad a depositar:"));
            if (deposito > 0) {
                saldo += deposito;
                console.log(`Has depositado: $${deposito}. Tu nuevo saldo es: $${saldo}`);
            } else {
                console.log(" Cantidad no válida");
            }
            break;

        case 3:
            let retiro = parseFloat(prompt(" Cantidad a retirar:"));
            if (retiro > 0 && retiro <= saldo) {
                saldo -= retiro;
                console.log(`Has retirado: $${retiro}. Tu nuevo saldo es: $${saldo}`);
            } else if (retiro > saldo) {
                console.log(" Fondos insuficientes");
            } else {
                console.log(" Cantidad no válida");
            }
            break;

        case 4:
            console.log(" Gracias por usar el cajero automatico. Vuelva Pronto");
            continuar = false; 
            break;

        default:
            console.log(" No se reconoce operacion, eliga otra opcion");
            break;
    }
}


//Implementa un programa que imprima los múltiplos de 3, 5 y 7 usando un for.
//Si un número es múltiplo de varios, indícalo.
let limite = 100;

for (let i = 1; i <= limite; i++) {
    let mensaje = `${i}: `; 
    let Multiplo = false;

    if (i % 3 === 0) {
        mensaje += "Multiplo de 3 ";
        Multiplo = true;
    }
    if (i % 5 === 0) {
        mensaje += "Multiplo de 5 ";
        Multiplo = true;
    }
    if (i % 7 === 0) {
        mensaje += "Multiplo de 7 ";
        Multiplo = true;
    }
    if (!Multiplo) {
        mensaje += "No es multiplo de 3, 5 o 7";
    }

    console.log(mensaje);
}

//Realiza un programa que pida 5 números y los ordene de mayor a menor usando un ciclo for y if.
let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Numero ${i + 1}:`));
    numeros.push(numero); 
}


for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
        if (numeros[j] < numeros[j + 1]) {
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}


console.log("Numeros de menor a mayor:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//Crea un programa que solicite una contraseña al usuario y permita tres intentos.
//Si falla, muestra un mensaje de bloqueo, usando do-while.}
let contraseña = 12345; 
let intentos = 0; 
let maxIntentos = 3; 

do {
    contraseña = parseInt(prompt("Ingrese la contraseña:"));
    if (contraseña === contraseña) {
        console.log("Contraseña correcta. Acceso concedido");
        break; 
    } else {
        intentos++;
        console.log("Contraseña incorrecta. Intentos restantes " + (maxIntentos - intentos));
    }
} while (intentos < maxIntentos);

if (intentos === maxIntentos) {
    console.log("Acceso negado. Cuenta Bloqueada");
}


//Desarrolla un programa que determine si un número ingresado es perfecto
//(un número es perfecto si es igual a la suma de sus divisores propios) usando un ciclo for.
let numeroPerfecto = parseInt(prompt("Ingrese un número para determinar si es perfecto:"));
let sumaDivisores = 0;


for (let i = 1; i < numeroPerfecto; i++) {
    if (numeroPerfecto % i === 0) {
        sumaDivisores += i;
    }
}


if (sumaDivisores === numeroPerfecto) {
    console.log(numeroPerfecto + " Es un número perfecto");
} else {
    console.log(numeroPerfecto + " No es un número perfecto");
}