function findIndex(arr, element) {
    // Loop para percorrer todos os elementos do array
    for (let i = 0; i < arr.length; i++) {
        // Verifica se o elemento no índice i é igual ao elemento procurado
        if (arr[i] === element) {
            return i;  // Retorna o índice da primeira ocorrência
        }
    }
    
    return -1;  // Retorna -1 se o elemento não for encontrado no array
}

console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1