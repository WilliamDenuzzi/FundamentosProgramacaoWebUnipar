let inputNumero = document.querySelector ("#inputNumero")
let btCalcular = document.querySelector ("#btCalcular")
let h3Resultado = document.querySelector ("#h3Resultado")

function retornaUnidades(){
    let numero = Number (inputNumero.value)

    let centena = Math.floor (numero / 100)
    let dezena = Math.floor ((numero % 100) / 10)
    let unidade = numero % 10

    h3Resultado.innerHTML = 'CENTENA = '+centena+ '<br>'+
                            'DEZENA = '+dezena+ '<br>'+
                            'UNIDADE = '+unidade
}

function redirectToIndexPage (){
    window.location.href = "index.html"
}

btCalcular.onclick = function (){
    retornaUnidades()
}