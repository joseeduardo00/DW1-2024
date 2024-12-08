function mergeArrays(arr1, arr2) {
    let mergedArray = [];  // Array para armazenar a fusão dos dois arrays

    // Adicionar todos os elementos de arr1 ao mergedArray
    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }

    // Adicionar todos os elementos de arr2 ao mergedArray
    for (let i = 0; i < arr2.length; i++) {
        mergedArray.push(arr2[i]);
    }

    return mergedArray;  // Retorna o array combinado
}


console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]