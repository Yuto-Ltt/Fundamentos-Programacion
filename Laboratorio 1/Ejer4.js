//Determine el dia de la semana apartir de un numero
let Semana = 3;
let dia;

switch (Semana) {
    case 1:
        dia = 'Domingo';
        break;
    case 2:
        dia = 'Lunes';
        break;
    case 3:
        dia = 'Martes';
        break;
    case 4:
        dia = 'Miércoles';
        break;
    case 5:
        dia = 'Jueves';
        break;
    case 6:
        dia = 'Viernes';
        break;
    case 7:
        dia = 'Sábado';
        break;
    defalult:
        dia = 'Número no válido. Debe estar entre 1 y 7';
}

console.log(dia);


//Verifica si una letra es vocal(Solo minusculas)
let Vocal = 'e'; 
if (Vocal.length === 1 && Vocal >= 'a' && Vocal <= 'z') {
    switch (Vocal) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(Vocal + ' es una vocal');
            break;
        default:
            console.log(Vocal + ' no es una vocal');
    }
}

//Determina el mes del año a partir de un número.
let mes = 12;
let Dia
switch (mes) {
    case 1:
        Dia = 'Enero';
        break;
    case 2:
        Dia = 'Febreo';
        break;
    case 3:
        Dia = 'Marzo';
        break;
    case 4:
        Dia = 'Abril';
        break;
    case 5:
        Dia = 'Mayo';
        break;
    case 6:
        Dia = 'Junio';
        break;
    case 7:
        Dia = 'Julio';
        break;
    case 8:
        Dia = 'Agosto'
        break;
    case 9:
        Dia = 'Septiembre'
        break;
    case 10:
        Dia = 'Octubre'
        break;
    case 11:
        Dia = 'Noviembre'
        break;
    case 12:
        Dia = 'Diciembre'
        break;
         default:
}



//Clasifica una nota en letras (A, B, C, D, F).
let puntuacion = 85;
let clasificacion;

switch (true){
    case (puntuacion >= 90 && puntuacion <= 100):
        clasificacion = 'A';
        break;
    case (puntuacion >= 80):
        clasificacion = 'B';
        break;
    case (puntuacion >= 70):
        clasificacion = 'C';
        break;
    case (puntuacion >= 60):
        clasificacion = 'D';
        break;
    case (puntuacion >= 0):
        clasificacion = 'F';
        break;
}


//Verifica si una cadena es "Hola", "Adiós" o "Desconocido".
let cadena = "Hola soy roselt"; 
switch (cadena) {
    case "Hola":
        console.log("La cadena es 'Hola'");
        break;
    case "Adiós":
        console.log("La cadena es 'Adiós'");
        break;
    case "Desconocido":
        console.log("La cadena es 'Desconocido'");
        break;
}

//Determina si una cadena es "Sí" o "No".
let cadena2 = "Sí";
switch (cadena2) {
    case "Sí":
        console.log("La cadena es 'Sí'");
        break;
    case "No":
        console.log("La cadena es 'No'");
        break;
    default:
}


//Verifica la estación del año a partir de un mes.
let Estmes = "Enero"; 
Estmes = Estmes.toLowerCase(); 
switch (Estmes) {
    case "diciembre":
    case "enero":
    case "febrero":
        console.log(`El mes de ${Estmes} corresponde a la estación: Invierno`);
        break;
    case "marzo":
    case "abril":
    case "mayo":
        console.log(`El mes de ${Estmes} corresponde a la estación: Primavera`);
        break;
    case "junio":
    case "julio":
    case "agosto":
        console.log(`El mes de ${Estmes} corresponde a la estación: Verano`);
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log(`El mes de ${Estmes} corresponde a la estación: Otoño`);
        break;
}


//Convierte un número del 1 al 5 en su nombre en inglés.
let numero = 1;
switch (numero){
    case 1:
        consolole.log(`El numero ${numero} es: One`);
        break;
    case 2:
            consolole.log(`El numero ${numero} es: Two`);
            break;
    case 3:
        consolole.log(`El numero ${numero} es: Three`);
        break;
    case 4:
        consolole.log(`El numero ${numero} es: Four`);
        break;
    case 5:
        consolole.log(`El numero ${numero} es: Five`);
        break;
}

//Verifica el tipo de usuario (admin, editor, usuario).
let claveUsuarios = {
    admin: 12345,
    editor: 54321,
    usuario: 1122
};
let claveIngresado = parseInt(prompt(" Ingresa la contraseña:"));
switch (claveIngresado){
    case claveUsuarios.admin:
        console.log(" El usuario es administrador");
        break;
    case claveUsuarios.editor:
        console.log(" El usuario es editor");
        break;
    case claveUsuarios.usuario:
        console.log("Es un usuario normal.");
        break;
}


//Determina el color del semáforo (rojo, amarillo, verde).
let semaforo = 1;
switch(semaforo){
    case 1:
        console.log("Es rojo");
    case 2:
        console.log("Es Amarillo")
    case 3:
        console.log("Es verde")
}
