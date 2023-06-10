function ordenarNumeros() {
    
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var num3 = parseInt(document.getElementById("numero3").value);
    var num4 = parseInt(document.getElementById("numero4").value);
    var num5 = parseInt(document.getElementById("numero5").value);

   
    var maior, segundoMaior, terceiroMaior, quartoMaior, menor;

    // Encontra o maior número
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
      maior = num1;
    } else if (num2 > num3 && num2 > num4 && num2 > num5) {
      maior = num2;
    } else if (num3 > num4 && num3 > num5) {
      maior = num3;
    } else if (num4 > num5) {
      maior = num4;
    } else {
      maior = num5;
    }

    // Encontra o segundo maior número
    if ((num1 > num2 && num1 < maior) || (num1 < num2 && num1 > maior)) {
      segundoMaior = num1;
    } else if ((num2 > num3 && num2 < maior) || (num2 < num3 && num2 > maior)) {
      segundoMaior = num2;
    } else if ((num3 > num4 && num3 < maior) || (num3 < num4 && num3 > maior)) {
      segundoMaior = num3;
    } else if ((num4 > num5 && num4 < maior) || (num4 < num5 && num4 > maior)) {
      segundoMaior = num4;
    } else {
      segundoMaior = num5;
    }

    // Encontra o terceiro maior número
    if ((num1 > num2 && num1 < segundoMaior) || (num1 < num2 && num1 > segundoMaior)) {
      terceiroMaior = num1;
    } else if ((num2 > num3 && num2 < segundoMaior) || (num2 < num3 && num2 > segundoMaior)) {
      terceiroMaior = num2;
    } else if ((num3 > num4 && num3 < segundoMaior) || (num3 < num4 && num3 > segundoMaior)) {
      terceiroMaior = num3;
    } else if ((num4 > num5 && num4 < segundoMaior) || (num4 < num5 && num4 > segundoMaior)) {
      terceiroMaior = num4;
    } else {
      terceiroMaior = num5;
    }

    // Encontra o quarto maior número
    if ((num1 > num2 && num1 < terceiroMaior) || (num1 < num2 && num1 > terceiroMaior)) {
      quartoMaior = num1;
    } else if ((num2 > num3 && num2 < terceiroMaior) || (num2 < num3 && num2 > terceiroMaior)) {
      quartoMaior = num2;
    } else if ((num3 > num4 && num3 < terceiroMaior) || (num3 < num4 && num3 > terceiroMaior)) {
      quartoMaior = num3;
    } else if ((num4 > num5 && num4 < terceiroMaior) || (num4 < num5 && num4 > terceiroMaior)) {
      quartoMaior = num4;
    } else {
      quartoMaior = num5;
    }

    // Encontra o menor número
    if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
      menor = num1;
    } else if (num2 < num3 && num2 < num4 && num2 < num5) {
      menor = num2;
    } else if (num3 < num4 && num3 < num5) {
      menor = num3;
    } else if (num4 < num5) {
      menor = num4;
    } else {
      menor = num5;
    }


    // Exibe os números em ordem decrescente
    var numerosOrdenados = maior + ", " + segundoMaior + ", " + terceiroMaior + ", " + quartoMaior + ", " + menor;
    document.getElementById("resultado").innerHTML = "Números em ordem decrescente: " + numerosOrdenados;
}