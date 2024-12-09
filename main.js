// main.js

// Algoritmo condicional mejorado
function determinarParidad() {
    console.log("Escribe números para verificar si son pares o impares. Escribe 'salir' para terminar.");

    while (true) {
        let entrada = prompt("Ingresa un número o escribe 'salir':");

        // Verificar si el usuario quiere salir
        if (entrada.toLowerCase() === "salir") {
            console.log("Programa terminado.");
            break;
        }

        // Convertir entrada a número
        let numero = parseInt(entrada);

        if (isNaN(numero)) {
            console.log("Por favor, ingresa un número válido.");
        } else {
            if (numero % 2 === 0) {
                console.log(`El número ${numero} es par.`);
            } else {
                console.log(`El número ${numero} es impar.`);
            }
        }
    }
}
determinarParidad()

// Capturar entradas mediante prompt()
let start = parseInt(prompt("Introduce el número inicial del rango:"));
let end = parseInt(prompt("Introduce el número final del rango:"));

// Declarar variables y objetos necesarios
let pares = [];
let impares = [];
let resultado = {};

// Función para verificar si un número es par
function esPar(num) {
    return num % 2 === 0;
}

// Crear funciones para realizar las operaciones
function clasificarNumeros(inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        if (esPar(i)) {
            pares.push(i);
        } else {
            impares.push(i);
        }
    }
}

// Llamar a la función y procesar los datos
clasificarNumeros(start, end);

// Almacenar los resultados en un objeto
resultado = {
    rango: `De ${start} a ${end}`,
    pares: pares,
    impares: impares
};

// Efectuar una salida (mostrar el resultado procesado)
console.log("Resultado del análisis de números:");
console.log(resultado);
alert(`Rango: ${resultado.rango}\nPares: ${resultado.pares.join(", ")}\nImpares: ${resultado.impares.join(", ")}`);