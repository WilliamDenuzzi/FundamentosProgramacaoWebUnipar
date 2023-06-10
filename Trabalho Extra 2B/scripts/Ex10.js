let inputNivel = document.querySelector ("#inputNivel")
let inputQtAulas = document.querySelector ("#inputQtAulas")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaSalario (){
    let nivel = Number (inputNivel.value)
    let qtAulas = Number (inputQtAulas.value)

    if (nivel == 1){
        salario = 12 * (qtAulas * 4.5)
    } else if (nivel == 2){
        salario = 17 * (qtAulas * 4.5)
    } else if (nivel == 3){
        salario = 25 * (qtAulas * 4.5)
    }

    h3Resultado.textContent = 'O salário do professor será de: R$ '+salario.toFixed(2)
}

btCalcular.onclick = function (){
    calculaSalario()
}