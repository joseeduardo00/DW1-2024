// Escreva uma função isPalindrome(str) que verifique se uma string é um palíndromo (ou seja, se ela é a mesma quando lida de trás para frente).

function isPalindrome(str) {

    // Remove espaços e converte para minúsculas
    const normalizedStr = str.regex(/[\W_]/g, '').toLowerCase();
    // /../ indica que você está criando uma regex, o [...] define um conjunto de caracteres, \W é um atalho que representa todos os caracteres que não são letras, números ou sublinhado, o _ é especificamente incluído no conjunto e o g indica que é global e isso indica que a busca deve ser feita em toda a string, não apenas na primeira ocorrência. Assim, todas as instâncias dos caracteres que correspondem ao padrão serão removidas.
    
    // Inverte a string normalizada
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Compara a string normalizada com a invertida
    return normalizedStr === reversedStr;
}

console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("hello")); // Deve exibir: false