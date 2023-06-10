let inputPequena = document.querySelector ("#inputPequena")
let inputMedia = document.querySelector ("#inputMedia")
let inputGrande = document.querySelector ("#inputGrande")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaCompra (){
    let CamisaP = Number (inputPequena.value)
    let CamisaM = Number (inputMedia.value)
    let CamisaG = Number (inputGrande.value)
    let ValorP = 10
    let ValorM = 12
    let ValorG = 15

    totPagar = (CamisaP * ValorP) + (CamisaM * ValorM) + (CamisaG * ValorG)

    h3Resultado.innerHTML = 'Você está comprando: '+'<br>'+
                            CamisaP+' Camiseta(s) P;'+'<br>'+CamisaM+' Camiseta(s) M;'+'<br>'+
                            CamisaG+' Camiseta(s) G.'+ '<br>'+'O total da sua conta é de: R$ '+totPagar+',00'

}

function redirectToIndexPage (){
    window.location.href = "index.html"
}

btCalcular.onclick = function (){
    calculaCompra()
}