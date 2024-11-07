function reverseArray(arr) {
    let reversedArray = [];  // Array para armazenar os elementos na ordem inversa

    // Loop para percorrer o array original de trás para frente
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);  // Adiciona o elemento ao novo array
    }

    return reversedArray;  // Retorna o array com os elementos invertidos
}

console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]