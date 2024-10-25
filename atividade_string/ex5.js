function getInitials(name) {
    // Divide o nome em partes (palavras) usando o espaço como delimitador
    const partes = name.split(' ');
    
    // Mapeia cada parte para a primeira letra e a transforma em maiúscula
    // o map é usado para iterar sobre cada parte do array
    const iniciais = partes.map(part => part.charAt(0).toUpperCase());
    // part.charAt(0) obtém o primeiro caractere.
    // toUpperCase() deixa a palavra maiúscula
    
    // Junta as iniciais em uma string e a retorna
    return iniciais.join('');
}

console.log(getInitials("João Silva")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"