function findMax(arr) {
    let max = arr[0];  // Inicializa a variável "max" com o primeiro número do array

    // Percorre o array para comparar os número em um loop
    for (let i = 1; i < arr.length; i++) {  
        if (arr[i] > max) {  // Verifica se o número atual é maior que o "max"
            max = arr[i];     // Se for maior, atualiza "max" com esse número
        }
    }

    return max;  // Retorna o maior número encontrado
}

console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5
console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10