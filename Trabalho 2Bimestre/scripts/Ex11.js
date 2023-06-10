let inputSalario = document.querySelector ("#inputSalario")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaSalario (){
    let salario = Number (inputSalario.value)

    salarioAumento = ((15/100) * salario) + salario

    desconto = (8/100) * salarioAumento

    salarioFinal = salarioAumento - desconto

    h3Resultado.innerHTML = 'A seguir a validação de alterações do seu salário: '+'<br>'+
    'Salário Inicial: R$ '+salario.toFixed(2)+ '<br>'+
    'Salário c/ Aumento(15%): R$ '+salarioAumento.toFixed(2)+ '<br>'+
    'Salário Final (8% imposto): R$ '+salarioFinal.toFixed(2)
}

function redirectToIndexPage (){
    window.location.href = "index.html"
}

btCalcular.onclick = function (){
    calculaSalario()
}