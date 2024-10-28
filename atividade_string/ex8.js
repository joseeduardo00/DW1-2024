function trimSpaces(str) {
    return str
        .trim()             // Remove espaços extras no início e no fim
        .replace(/\s+/g, ' '); // Substitui múltiplos espaços por um único espaço
}

console.log(trimSpaces("   JavaScript    é     divertido    ")); // Deve exibir: "JavaScript é divertido"
console.log(trimSpaces("   Programação     é   interessante  ")); // Deve exibir: "Programação é interessante"