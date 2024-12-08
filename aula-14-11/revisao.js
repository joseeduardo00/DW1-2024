const numeros = [10, 15, 20]

// const copia = []

// for ( numero of numeros) {
   // copia.push(numero * 2)
// }

// console.log(copia)

function multiplica2(elemento) {
    return elemento * 2
}

const multiplica3 = function (elemento) {
    return elemento * 3
}

const multiplica4 = (elemento) => {
    return elemento * 4
}


const copia = numero.map(multiplica2)

const copia2 = numeros.map(function (elemento) {
    return  elemento * 2
})

const numerosString = numeros.map(numero => numero)

console,log(numeros)
console.log(numerosString)