let inputAltura = document.querySelector ("#inputAltura")
let inputComprimento = document.querySelector ("#inputComprimento")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaArea (){
    let altura = Number (inputAltura.value);
    let comprimento = Number (inputComprimento.value);
    let resultado

    resultado = (altura * comprimento)

    h3Resultado.textContent = 'A área total do terreno é: '+resultado+' metros quadrados!'


}

function redirectToIndexPage (){
    window.location.href = "index.html"
}

btCalcular.onclick = function (){
    calculaArea ();
}