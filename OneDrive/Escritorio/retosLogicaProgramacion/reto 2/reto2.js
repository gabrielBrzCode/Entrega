// FUNCION NUMERO PRIMO
function esPrimo(num) {
  if (num <= 1) return false;
     if (num % 2 === 0 || num % 3 === 0) return false;
// VERIFICACION
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
//SI SE CUMPLE TODO FUNCIONA
    return true;
}

//2DA FUNCION
function genPrimo() {
    // Obtiene el valor del input
    const numero = document.getElementById("numero").value;
    // Obtiene el div donde se mostrará el resultado
    const resultDiv = document.getElementById("result");

    // Verifica si el número es menor que 2
    if (numero < 2) {
        //MENSAJE DE ERROR SI INGRESA NUM NO VALIDO
        resultDiv.innerHTML = "Introduce un número mayor que 1.";
        return;
    }

    // Arreglo para almacenar los números primos
    let primos = [];
    // Itera desde 2 hasta el número INGRESADO
    for (let i = 2; i < numero; i++) {
        // Si el número es primo, lo guarda en arreglo
        if (esPrimo(i)) {
            primos.push(i);
        }
    }

    // Muestra el resultado en el div RESULT
    resultDiv.innerHTML = "Números primos menores que " + numero + ":<br>" + primos.join(", ");
}
