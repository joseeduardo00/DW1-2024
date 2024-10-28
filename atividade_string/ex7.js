function capitalizeWords(str) {
    return str
        .toLowerCase() // Converte a string para minúsculas
        .split(' ')    // Divide a string em um array de palavras
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza a primeira letra de cada palavra
        .join(' ');    // Junta as palavras em uma única string novamente
}

console.log(capitalizeWords("hello world")); // Deve exibir: "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // Deve exibir: "JavaScript Is Awesome"