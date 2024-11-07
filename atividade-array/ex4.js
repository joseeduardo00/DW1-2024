function allEquals(arr) {
    // Se o array tiver 0 ou 1 elemento, considera-se que todos são iguais (por definição)
    if (arr.length <= 1) {
        return true;
    }

    // Comparar cada elemento com o primeiro do array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false; // Se algum elemento for diferente do primeiro, retorna false
        }
    }

    return true; // Se o loop terminar, todos os elementos são iguais
}

console.log(allEquals([1, 1, 1])); // Deve exibir: true
console.log(allEquals([1, 2, 1])); // Deve exibir: false