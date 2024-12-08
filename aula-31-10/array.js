let vetor = [10,20,30]

console.log(vetor)

vetor[vetor.length] = 40
console.log(vetor)


function inserir(vet, pos, valor) {
    if (pos , 0) return false
    if (pos > vet.length) return false

    for(let i = vet.length; i > pos; i--){
    vetor[i] = vetor[i-1]
    }

    vet[pos] = valor
    return true

}

function teste1(){
    inserir(vetor, 0, 40)
    inserir(vetor, vetor.length, 80)
    inserir(vetor, 1, 45)
    inserir(vetor, vetor.length-1, 75)
    inserir(vetor, 3, 55)
    console.log(vetor)
}

function teste2(){
    inserir(vetor, -1, 100)
    console.log(vetor)
    inserir(vetor, 10, 100)

}

let vetor = [10,20,30]
console.log(vetor)
