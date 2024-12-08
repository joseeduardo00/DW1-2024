function fatorial(x){
    let resultado = 0

    for (let i = 0; i <= x; i++ ) {
        resultado *= i
    }

    return resultado
}

console.log(fatorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
