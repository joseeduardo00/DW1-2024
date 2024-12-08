function average(arr) {
    // Verificar se o array está vazio
    if (arr.length === 0) {
        return 0; // Retorna 0 ou outro valor indicando que não há elementos
    }
    
    let soma = 0; // Variável para armazenar a soma dos elementos
    
    // Percorrer todos os elementos do array e somá-los
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]; // Soma o valor de arr[i] à variável soma
    }
    
    // Dividir a soma pelo número de elementos para encontrar a média
    let media = soma / arr.length;
    
    return media; // Retorna a média dos elementos
}

console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
console.log(average([10, 20, 30])); // Deve exibir: 20