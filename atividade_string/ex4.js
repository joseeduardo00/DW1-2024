// Crie uma função countOccurrences(str, char) que receba uma string e um caractere, e conte quantas vezes esse caractere aparece na string

function countOccurrences(str, char) {
    let count = 0; // Inicializa o contador

    // Itera sobre cada caractere da string
    for (let i = 0; i < str.length; i++) {
        // A propriedade length retorna o número de caracteres de uma string.

        // Se o caractere atual for igual ao caractere buscado, incrementa o contador
        if (str[i] === char) {
            count++;
        }
    }

    return count; // Retorna o número de ocorrências
}
