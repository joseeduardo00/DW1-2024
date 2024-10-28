function toSnakeCase(str) {
    return str
        .trim()                     // Remove espaços extras no início e no fim
        .toLowerCase()              // Converte a string para letras minúsculas
        .replace(/[^\w\s]/g, '')    // Remove caracteres especiais
        .replace(/\s+/g, '_');      // Substitui espaços por "_"
}

console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"
