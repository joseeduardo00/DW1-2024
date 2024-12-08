function sumArray(arr) {
    let sum = 0; // Inicializa a variável sum com 0
    
    // Itera sobre todos os elementos do array
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Adiciona o valor do elemento à variável sum
    }
    
    return sum; // Retorna a soma total
}

console.log(sumArray([1, 2, 3, 4])); // Deve exibir: 10
console.log(sumArray([10, -10, 10])); // Deve exibir: 10