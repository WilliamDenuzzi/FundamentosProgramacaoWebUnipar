let inputSaldo = document.querySelector ("#inputSaldo")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaCredito (){
    saldo = Number (inputSaldo.value)

    if (saldo >= 0 && saldo <= 200){
        credito = 0
    } else if (saldo >= 201 && saldo <= 400){
        credito = saldo * (20/100)
    } else if (saldo >= 401 && saldo <= 600){
        credito = saldo * (30/100)
    }else{
        credito = saldo * (40/100)
    }

    h3Resultado.innerHTML = 'O saldo médio do cliente é de: '+saldo+'<br>'+
                            'E o valor de crédito especial é de R$: '+credito.toFixed(2)
}

btCalcular.onclick = function (){
    calculaCredito()
}