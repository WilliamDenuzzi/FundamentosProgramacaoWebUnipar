let inputCavalo = document.querySelector ("#inputCavalo")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")


function calculaFerraduras (){
    let cavalos = Number (inputCavalo.value)
    let ferraduras = cavalos * 4

    h3Resultado.textContent = 'Serão necessárias '+ferraduras+ ' ferraduras para seus ' +cavalos+ ' cavalos!'
}

function redirectToIndexPage(){
    window.location.href = "index.html";
}

btCalcular.onclick = function (){
    calculaFerraduras();
}