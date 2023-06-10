let inputX1 = document.querySelector ("#inputX1")
let inputY1 = document.querySelector ("#inputY1")
let inputX2 = document.querySelector ("#inputX2")
let inputY2 = document.querySelector ("#inputY2")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function calculaDistancia (){
    let x1 = Number (inputX1.value)
    let y1 = Number (inputY1.value)
    let x2 = Number (inputX2.value)
    let y2 = Number (inputY2.value)

    let distancia = Math.sqrt ((x1-x2)**2 + (y1-y2)**2)

    h3Resultado.textContent = 'A Distância Euclediana é: '+distancia.toFixed(2)+ ' unidades.'
}

function redirectToIndexPage (){
    window.location.href = "index.html"
}

btCalcular.onclick = function (){
    calculaDistancia ()
}