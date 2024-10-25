// Crie uma função countVowels(str) que conte o número de vogais (a, e, i, o, u) em uma string e retorne esse valor.


function countVowels(str) {
    const regex = /[aeiouáéíóúâêîôûãõ]/i; 
    // Define as vogais que queremos contar
    // o regex é uma ferramenta poderosa utilizada para buscar, combinar e manipular strings com base em padrões. e o [aeiouáéíóúâêîôûãõ] são as vogais com acento ou não e o i vai procurar as vogais mesmo sendo maiúcula ou minúscula

    let contador = 0; // Inicializa o contador de vogais

    
    for (let char of str) {
        // o (let char of str) irá ficar repetindo o vogal (que está definida como char)
        if (regex.test(char)) { // o  test verifica se o caractere é uma vogal
            contador++; // Se for, incrementa o contador
        }
    }
    
    return contador; // Retorna o total de vogais encontradas
}


console.log(countVowels("OpenAI")); // Deve exibir: 4
console.log(countVowels("JavaScript")); // Deve exibir: 3