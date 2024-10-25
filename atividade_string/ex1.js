 // Crie uma função reverseString(str) que receba uma string como parâmetro e retorne a string invertida.

 function reverseString(str){
    return str.split('').reverse().join('');
    //  split separa as palavras
    // reverse reverte as palavras
    // join junta as palavras
 }
 
 console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
 console.log(reverseString("hello")); // Deve exibir: "olleh"