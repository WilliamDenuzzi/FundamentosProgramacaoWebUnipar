let inputNome = document.querySelector ("#inputNome")
let inputIdade = document.querySelector ("#inputIdade")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaDias (){
    let nome = String (inputNome.value)
    let idade = Number (inputIdade.value)

    idadeDias = idade * 365

    h3Resultado.textContent = nome+ ' você já viveu '+idadeDias+ ' dias!'
}

function redirectToIndexPage(){
    window.location.href = "index.html"
}

btCalcular.onclick = function (){
    calculaDias()
}