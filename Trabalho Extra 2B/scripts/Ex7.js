let inputCodigo = document.querySelector ("#inputCodigo")
let inputQtde = document.querySelector ("#inputQtde")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaLanche (){
    codigo = Number (inputCodigo.value)
    quantidade = Number (inputQtde.value)

    if (codigo == 1) {
        vlPagar = quantidade * 11
        h3Resultado.innerHTML = 'Você comprou '+quantidade+' cachorro(s) quente(s). Sua conta deu: R$ '+vlPagar
    } else if (codigo == 2) {
        vlPagar = quantidade * 8.5
        h3Resultado.innerHTML = 'Você comprou '+quantidade+' bauru(s). Sua conta deu: R$ '+vlPagar
    }else if (codigo == 3) {
        vlPagar = quantidade * 8
        h3Resultado.innerHTML = 'Você comprou '+quantidade+' misto(s) quente(s). Sua conta deu: R$ '+vlPagar
    }else if (codigo == 4){
        vlPagar = quantidade * 9
        h3Resultado.innerHTML = 'Você comprou '+quantidade+' hamburguer(s). Sua conta deu: R$ '+vlPagar
    }else if (codigo == 5) {
        vlPagar = quantidade * 10
        h3Resultado.innerHTML = 'Você comprou '+quantidade+' cheeseburger(s). Sua conta deu: R$ '+vlPagar
    }else if (codigo == 6) {
        vlPagar = quantidade * 4.5
        h3Resultado.innerHTML = 'Você comprou '+quantidade+' refrigerante(s). Sua conta deu: R$ '+vlPagar
    }else {
        h3Resultado.innerHTML = 'Não há produtos cadastrados com esse código!'
    }

}

btCalcular.onclick = function (){
    calculaLanche()
}