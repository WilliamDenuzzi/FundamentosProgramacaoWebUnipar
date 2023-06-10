let comprimentoX = document.querySelector ("#comprimentoX")
let comprimentoY = document.querySelector ("#comprimentoY")
let comprimentoZ = document.querySelector ("#comprimentoZ")
let btVerificar = document.querySelector ("#btVerificar")
let h3Resultado = document.querySelector ("#h3Resultado")

function verificaTriangulo(){
    let X = Number (comprimentoX.value)
    let Y = Number (comprimentoY.value)
    let Z = Number (comprimentoZ.value)

    if (X + Y <= Z || X + Z <= Y || Y + Z <= X){
        h3Resultado.textContent = 'Não é possível formar um triângulo com os valores inseridos!'
    } else if (X == Y && Y == Z) {
        h3Resultado.textContent = 'O triângulo será Equilátero (todos os lados iguais).'
    } else if (X == Y || X == Z || Y == Z){
        h3Resultado.textContent = 'O triângulo será Isósceles (pelo menos 2 lados iguais).'
    } else{
        h3Resultado.textContent = 'O triângulo será escaleno (todos os lados diferentes).'
    }


    
}

btVerificar.onclick = function (){
    verificaTriangulo()
}