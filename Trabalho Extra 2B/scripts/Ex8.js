let inputAltura = document.querySelector ("#inputAltura")
let inputSexo = document.querySelector ("#inputSexo")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaPeso (){
    altura = Number (inputAltura.value)
    sexo = String (inputSexo.value)

    if (sexo == 'M'.toLowerCase()){
        peso = (72.7 * altura) - 58
        h3Resultado.textContent = 'O seu peso é: '+peso.toFixed(2)+ 'Kgs'
    } else if (sexo == 'F'.toLowerCase()){
        peso = (62.1 * altura) - 44.7
        h3Resultado.textContent = 'O seu peso é: '+peso.toFixed(2)+ 'Kgs'
    } else {
        peso = 'O sexo informado não é válido!'
        h3Resultado.textContent = peso
    }

    
}

btCalcular.onclick = function (){
    calculaPeso()
}
