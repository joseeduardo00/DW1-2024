function ehPrimo(numero) {
    if (numero <= 1) {
        return false
    }

    for (let i = 2; i <= numero / 2; i++) {
        if (numero % 2 === 0) {
            return false
        }
    }

    return true
}



console.log(ehPrimo(7)); // true
console.log(ehPrimo(10)); // false
