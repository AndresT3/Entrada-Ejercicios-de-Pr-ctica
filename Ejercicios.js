const prompt = require (`prompt-sync`) ();

//Ejercicio número 1

let numero1 = prompt("Ingrese el primer número:");
let numero2 = prompt("Ingrese el segundo número:");

numero1 = Number(numero1);
numero2 = Number(numero2);

let suma = numero1 + numero2;

console.log("La suma es: " + suma);

//Ejercicio 2: Práctica

let Sumar1 = prompt("Ingrese el primer número que quiere sumar: ");
let Sumar2 = prompt("Ingrese el segundo número con que quiere sumar: ");

Sumar1 = Number(Sumar1);
Sumar2 = Number(Sumar2);
let Sumar3 = Sumar1 + Sumar2;
console.log("El resultado de tu Suma es: " + Sumar3);


//Ejercicio 3: Práctica

let precio = prompt("Costo del primer producto: ");
let precio2 = prompt("Costo del segundo producto: ");

precio = Number(precio);
precio2 = Number(precio2);
let precio3 = precio + precio2;
console.log("El total a pagar es: " + precio3);


//Ejercicio 4: Práctica

let edad = prompt("Ingrese la primer Edad: ");
let edad2 = prompt("Ingrese la segunda Edad: ");

edad = Number(edad);
edad2 = Number(edad2);
let edad3 = edad + edad2;
console.log("Edad en total: "+ edad3);


//Ejercicio 5: Práctica 

let nota1 = prompt("Ingresa tu primera Nota: ");
let nota2 = prompt("Ingresa tu segunda Nota: ");

nota1 = Number(nota1);
nota2 = Number(nota2);
let nota3 = nota1 + nota2;
console.log("Tu nota total es: " + nota3);
