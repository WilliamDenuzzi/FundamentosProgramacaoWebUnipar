let inputConta = document.querySelector ("#inputConta")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")


function calculaConta (){
    let conta = Number (inputConta.value)

    
    
    contaCarlos = Math.floor (conta / 3)
    contaAndre = Math.floor (conta / 3)
    contaFelipe = conta - (contaCarlos + contaAndre)

    h3Resultado.innerHTML = 'Valores à pagar: '+'<br>'+
                            'Carlos: R$ '+contaCarlos+ '<br>'+
                            'Andre: R$ '+contaAndre+ '<br>'+
                            'Felipe: R$ '+contaFelipe.toFixed(2)

}

function redirectToIndexPage (){
    window.location.href = "index.html"
}


btCalcular.onclick = function (){
    calculaConta()
}
