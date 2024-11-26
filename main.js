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

// Llama a la función
determinarParidad();
// Función para verificar si un número es par o impar
function determinarParidadInteractiva() {
    const entrada = document.getElementById("numeroInput").value;
    const resultadoDiv = document.getElementById("resultado");

    if (entrada.toLowerCase() === "salir") {
        resultadoDiv.innerHTML += "<p>Programa terminado. ¡Gracias por participar!</p>";
        document.getElementById("verificarBtn").disabled = true; // Deshabilita el botón
        return;
    }

    const numero = parseInt(entrada);

    if (isNaN(numero)) {
        resultadoDiv.innerHTML += "<p>❌ Por favor, ingresa un número válido.</p>";
    } else {
        if (numero % 2 === 0) {
            resultadoDiv.innerHTML += `<p>✅ El número ${numero} es <strong>par</strong>.</p>`;
        } else {
            resultadoDiv.innerHTML += `<p>✅ El número ${numero} es <strong>impar</strong>.</p>`;
        }
    }

    document.getElementById("numeroInput").value = ""; 
}
