let inputPaes = document.querySelector ("#inputPaes")
let inputBroas = document.querySelector ("#inputBroas")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calcularValores (){
    let paes = Number (inputPaes.value)
    let broas = Number (inputBroas.value)

    let vlPaes = 0.12
    let vlBroas = 1.5

    let vlTotal = (vlPaes * paes) + (vlBroas * broas)

    let percentPoupanca = 10/100

    let VlPoupanca = vlTotal * percentPoupanca 

    h3Resultado.innerHTML = 'O Total da venda de Pães e Broas é: R$ '+vlTotal+ '<br>'+
                            'E os 10% que irão para a poupança são: R$ '+VlPoupanca.toFixed(2)

}

function redirectToIndexPage(){
    window.location.href = "index.html"
}

btCalcular.onclick = function (){
    calcularValores();
}