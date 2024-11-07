function removeDuplicates(arr) {
    let uniqueArray = [];  // Array para armazenar elementos únicos

    // Loop para percorrer cada elemento do array original
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;  // Flag para identificar se o elemento é duplicado
        
        // Comparar o elemento atual com os já adicionados no uniqueArray
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;  // Se encontrar uma duplicata, marca como duplicado
                break;  // Não precisa continuar comparando, pois já encontrou a duplicata
            }
        }

        // Se o elemento não for duplicado, adiciona ao uniqueArray
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;  // Retorna o array com elementos únicos
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
