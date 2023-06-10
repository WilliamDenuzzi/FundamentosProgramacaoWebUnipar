let inputAno = document.querySelector ("#inputAno")
let inputValor = document.querySelector ("#inputValor")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaValor (){
    ano = Number (inputAno.value)
    valor = Number (inputValor.value)

    if (ano < 1990){
        imposto = valor * (1/100)
        h3Resultado.textContent = 'O imposto para a transferência do veículo é de: R$ '+imposto+ ',00'
    } else{
        imposto = valor * (1.5/100)
        h3Resultado.textContent = 'O imposto para a transferência do veículo é de: R$ '+imposto+ ',00'
    }
}

btCalcular.onclick = function (){
    calculaValor()
}