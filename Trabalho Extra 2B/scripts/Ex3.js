let inputValor = document.querySelector ("#inputValor")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")
notas100 =""
notas50 =""
notas10 =""
notas5=""
notas1=""


function decomporNotas (){
    let valor = Number (inputValor.value)
    
    if (valor >= 100){
        notas100 = Math.floor (valor / 100)
        notas50 = Math.floor (valor/50)
        notas10 = Math.floor (valor/10)
        notas5 = Math.floor (valor/5)
        notas1 = valor 

        h3Resultado.innerHTML = 'O valor informado foi: '+valor+ '<br>'+
                                'notas de 100 reais: '+notas100+ '<br>'+
                                'notas de 50 reais: '+notas50+ '<br>'+
                                'notas de 10 reais: '+notas10+ '<br>'+
                                'notas de 5 reais: '+notas5+ '<br>'+
                                'notas de 1 real: '+notas1+ '<br>'
    } else if (valor < 100 && valor >= 50){
        notas100 = 'Nenhuma nota de 100 reais.'
        notas50 = Math.floor (valor/50)
        notas10 = Math.floor (valor/10)
        notas5 = Math.floor (valor/5)
        notas1 = valor

        h3Resultado.innerHTML = 'O valor informado foi: '+valor+ '<br>'+
                                'notas de 100 reais: '+notas100+ '<br>'+
                                'notas de 50 reais: '+notas50+ '<br>'+
                                'notas de 10 reais: '+notas10+ '<br>'+
                                'notas de 5 reais: '+notas5+ '<br>'+
                                'notas de 1 real: '+notas1+ '<br>'
    }else if (valor < 50 && valor >= 10){
        notas100 = 'Nenhuma nota de 100 reais.'
        notas50 = 'Nenhuma nota de 50 reais.'
        notas10 = Math.floor (valor/10)
        notas5 = Math.floor (valor/5)
        notas1 = valor

        h3Resultado.innerHTML = 'O valor informado foi: '+valor+ '<br>'+
                                'notas de 100 reais: '+notas100+ '<br>'+
                                'notas de 50 reais: '+notas50+ '<br>'+
                                'notas de 10 reais: '+notas10+ '<br>'+
                                'notas de 5 reais: '+notas5+ '<br>'+
                                'notas de 1 real: '+notas1+ '<br>'
    }else if (valor < 10 && valor >= 5){
        notas100 = 'Nenhuma nota de 100 reais.'
        notas50 = 'Nenhuma nota de 50 reais.'
        notas10 = 'Nenhuma nota de 10 reais.'
        notas5 = Math.floor (valor/5)
        notas1 = valor

        h3Resultado.innerHTML = 'O valor informado foi: '+valor+ '<br>'+
                                'notas de 100 reais: '+notas100+ '<br>'+
                                'notas de 50 reais: '+notas50+ '<br>'+
                                'notas de 10 reais: '+notas10+ '<br>'+
                                'notas de 5 reais: '+notas5+ '<br>'+
                                'notas de 1 real: '+notas1+ '<br>'
    }else if (valor < 5 && valor >=1){
        notas100 = 'Nenhuma nota de 100 reais.'
        notas50 = 'Nenhuma nota de 50 reais.'
        notas10 = 'Nenhuma nota de 10 reais.'
        notas5 = 'Nenhuma nota de 5 reais.'
        notas1 = valor

        h3Resultado.innerHTML = 'O valor informado foi: '+valor+ '<br>'+
                                'notas de 100 reais: '+notas100+ '<br>'+
                                'notas de 50 reais: '+notas50+ '<br>'+
                                'notas de 10 reais: '+notas10+ '<br>'+
                                'notas de 5 reais: '+notas5+ '<br>'+
                                'notas de 1 real: '+notas1+ '<br>'
    }else{
        notas100 = 'Nenhuma nota de 100 reais.'
        notas50 = 'Nenhuma nota de 50 reais.'
        notas10 = 'Nenhuma nota de 10 reais.'
        notas5 = 'Nenhuma nota de 5 reais.'
        notas1 = 'Nenhuma nota de 1 real.'

        h3Resultado.innerHTML = 'O valor informado foi: '+valor+ '<br>'+
                                'notas de 100 reais: '+notas100+ '<br>'+
                                'notas de 50 reais: '+notas50+ '<br>'+
                                'notas de 10 reais: '+notas10+ '<br>'+
                                'notas de 5 reais: '+notas5+ '<br>'+
                                'notas de 1 real: '+notas1+ '<br>'
    }

}

btCalcular.onclick = function (){
    decomporNotas()
}