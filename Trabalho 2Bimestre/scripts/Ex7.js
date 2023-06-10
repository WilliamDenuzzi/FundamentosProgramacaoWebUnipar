let inputDia = document.querySelector ("#inputDia")
let inputMes = document.querySelector ("#inputMes")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaDias (){
    let dia = Number (inputDia.value)
    let mes = Number (inputMes.value)

    
   
    diasPassados = (mes - 1) * 30 + dia
    

    h3Resultado.textContent = 'Já se passaram '+diasPassados+' dias desde o começo desse ano!'
}

function redirectToIndexPage (){
    window.location.href = "index.html"
}

btCalcular.onclick = function (){
    calculaDias()
}
