// function somaSerie(cont) {



//     return soma
// }

// console.log(somaSerie(3))
// console.log(somaSerie(4))


    
//  soma = soma + (1 * 1)
//  soma = soma + (2 * 3)
//  soma = soma + (3 * 5)
//  soma = soma + (4 * 7)

count = 5
let soma = 0
let y = 1
for(let x = 1; x <= count; x ++){
    soma = soma + (x * y)
    y += 2
}


console.log(soma)