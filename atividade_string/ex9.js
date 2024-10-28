function replaceChar(str, oldChar, newChar) {
    const regex = new RegExp(oldChar, 'g'); // Cria uma expressão regular global para o caractere a ser substituído
    return str.replace(regex, newChar);     // Substitui todas as ocorrências de oldChar por newChar
}

console.log(replaceChar("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o")); // Deve exibir: "bonono"