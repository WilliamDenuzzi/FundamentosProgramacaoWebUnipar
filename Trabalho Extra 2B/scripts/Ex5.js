let inputSalario = document.querySelector ("#inputSalario")
let inputCargo = document.querySelector ("#inputCargo")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function reajusteSalarial (){
    salarioAtual = Number (inputSalario.value)
    cargo = String (inputCargo.value)

    if (cargo == 'Gerente'.toLowerCase()){
        novoSalario = (salarioAtual * (10/100)) + salarioAtual
        diferencaSalarial = novoSalario - salarioAtual

        h3Resultado.innerHTML = 'Reajuste Salarial: '+'<br>'+
                                'Salário antigo: R$ '+salarioAtual.toFixed(2)+ '<br>'+
                                'Novo salário: R$ '+novoSalario.toFixed(2)+ '<br>'+
                                'Diferença: R$ '+diferencaSalarial.toFixed(2)

    } else if (cargo == 'Engenheiro'.toLowerCase()){
        novoSalario = (salarioAtual * (20/100)) + salarioAtual
        diferencaSalarial = novoSalario - salarioAtual

        
        h3Resultado.innerHTML = 'Reajuste Salarial: '+'<br>'+
                                'Salário antigo: R$ '+salarioAtual.toFixed(2)+ '<br>'+
                                'Novo salário: R$ '+novoSalario.toFixed(2)+ '<br>'+
                                'Diferença: R$ '+diferencaSalarial.toFixed(2)

    } else if (cargo == 'Técnico'.toLowerCase()){
        novoSalario = (salarioAtual * (30/100)) + salarioAtual
        diferencaSalarial = novoSalario - salarioAtual

        
        h3Resultado.innerHTML = 'Reajuste Salarial: '+'<br>'+
                                'Salário antigo: R$ '+salarioAtual.toFixed(2)+ '<br>'+
                                'Novo salário: R$ '+novoSalario.toFixed(2)+ '<br>'+
                                'Diferença: R$ '+diferencaSalarial.toFixed(2)

    }else{
        novoSalario = (salarioAtual * (40/100)) + salarioAtual
        diferencaSalarial = novoSalario - salarioAtual

        
        h3Resultado.innerHTML = 'Reajuste Salarial: '+'<br>'+
                                'Salário antigo: R$ '+salarioAtual.toFixed(2)+ '<br>'+
                                'Novo salário: R$ '+novoSalario.toFixed(2)+ '<br>'+
                                'Diferença: R$ '+diferencaSalarial.toFixed(2)
    }
}

btCalcular.onclick = function(){
    reajusteSalarial()
}