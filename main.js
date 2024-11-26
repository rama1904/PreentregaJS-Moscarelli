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