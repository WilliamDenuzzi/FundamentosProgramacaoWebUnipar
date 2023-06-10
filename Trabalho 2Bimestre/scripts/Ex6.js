let inputKg = document.querySelector ("#inputKg")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaRefeicao (){
    let kg = Number (inputKg.value)
    let vlKg = 12

    vlConta = vlKg * kg

    h3Resultado.textContent = 'O seu prato deu '+kg+ ' Kg. O valor da sua conta é: R$ '+vlConta.toFixed(2)
}

function redirectToIndexPage (){
    window.location.href = "index.html"
}


btCalcular.onclick = function (){
    calculaRefeicao()
}