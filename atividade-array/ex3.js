function countOccurrences(arr, element) {
    let count = 0; // Inicializa a variável "count" com 0
    
    // Percorre todos os elementos do array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {  // Verifica se o elemento atual é igual ao "element"
            count++;  // Se for igual, incrementa o contador "count"
        }
    }
    
    return count;  // Retorna o número de ocorrências
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2