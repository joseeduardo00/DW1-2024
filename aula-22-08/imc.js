let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let divSaida = document.getElementById("saida")
let botaocalcular = document.getElementById("calcular")

botaocalcular.onclick = calcularIMC

function calcularIMC(){
    alert("está calculando")

    // Entrada
    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)

    // Processamento

    let imc = peso / ( altura * altura)

    // Saída

    divSaida.innerText = imc

}
