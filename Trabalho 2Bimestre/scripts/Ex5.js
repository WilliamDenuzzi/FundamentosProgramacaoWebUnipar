let inputCombustivel = document.querySelector("#inputCombustivel")
let inputValor = document.querySelector("#inputValor")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function calculaLitros (){
    let combustivel = Number (inputCombustivel.value)
    let valor = Number (inputValor.value)

    qtdeLitros = valor / combustivel

    h3Resultado.textContent = 'Você acabou de abastecer '+qtdeLitros.toFixed(2)+ ' litro(s) de combustível. Tenha uma ótima viagem!'
}

function redirectToIndexPage(){
    window.location.href = "index.html"
}


btCalcular.onclick = function (){
    calculaLitros ()
}