function getEvenNumbers(arr) {
    let evenNumbers = [];  // Array para armazenar os números pares

    // Loop para percorrer todos os elementos do array
    for (let i = 0; i < arr.length; i++) {
        // Verifica se o número é par
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);  // Adiciona o número par ao array
        }
    }

    return evenNumbers;  // Retorna o array com os números pares
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]