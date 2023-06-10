let inputValor = document.querySelector ("#inputValor")
let inputOpcaoPgmt = document.querySelector ("#inputOpcaoPgmt")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")


function calculaValorCompra (){
    valor = Number (inputValor.value)
    opcaoPgmt = String(inputOpcaoPgmt.value)

    if (opcaoPgmt == 'A'.toLowerCase()){
        desconto = valor * (10/100)
        vlPagar = valor - desconto
    } else if (opcaoPgmt == 'B'.toLowerCase()){
        desconto = valor * (15/100)
        vlPagar = valor - desconto
    }else if (opcaoPgmt == 'C'.toLowerCase()){
        vlPagar = valor
    }else if (opcaoPgmt == 'D'.toLowerCase()){
        juros = valor * (10/100)
        vlPagar = valor + juros
    }

    h3Resultado.innerHTML = 'Você escolheu a opção de pagamento: '+opcaoPgmt+ '<br>'+
                            'A sua conta ficou em: R$ '+vlPagar

}

btCalcular.onclick = function (){
    calculaValorCompra()
}