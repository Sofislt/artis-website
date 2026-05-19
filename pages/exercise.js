// ============================================
// 1ª QUESTÃO – Faça uma função MAIOR_MENOR(a, b, c, d, e) que leia cinco valores inteiros e
// imprima o maior e o menor valor.
// ============================================

document.getElementById("first-question").addEventListener("submit", function(event) {
    event.preventDefault();

    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    const d = Number(document.getElementById("d").value);
    const e = Number(document.getElementById("e").value);

    const biggerSmaller = maiorMenor(a, b, c, d, e);
})

function maiorMenor(firstValue, secondValue, thirdValue, fourthValue, fifthValue) {
    var isInteger = false;
    if(Number.isInteger(firstValue) && Number.isInteger(secondValue) && Number.isInteger(thirdValue) && Number.isInteger(fourthValue) && Number.isInteger(fifthValue)) {
        isInteger = true;
    }

    if(isInteger) {
        const maior = Math.max(firstValue, secondValue, thirdValue, fourthValue, fifthValue);
        const menor = Math.min(firstValue, secondValue, thirdValue, fourthValue, fifthValue);

        document.getElementById("result-first-question").innerHTML = "O maior número é: " + maior + "<br>" + "O menor número é: " + menor;
    }
    else {
        alert("Digite apenas números inteiros!");
    }
}

// ============================================
// 2ª QUESTÃO – Criar uma função VOGAL(c) que receba um caractere como parâmetro e retorne 1
//(um) caso seja uma vogal e zero caso não seja.
// ============================================

document.getElementById("second-question").addEventListener("submit", function(event) {
    event.preventDefault();

    const caractere = document.getElementById("caractere").value;

    const isVowel = vogal(caractere);
})

function vogal(char) {
    char.toLowerCase();
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        document.getElementById("result-second-question").innerHTML = "1 (é uma vogal)";
    }
    else{
        document.getElementById("result-second-question").innerHTML = "0 (não é uma vogal)"; 
    }
}

// ============================================
// 3ª QUESTÃO – Criar uma função LIMITES(li, ls) que leia os limites inferior e superior de um intervalo
// e imprimir todos os números pares no intervalo aberto e seu somatório. Suponha
// que os dados digitados são para um intervalo crescente.
// ============================================

document.getElementById("third-question").addEventListener("submit", function(event) {
    event.preventDefault();

    const limiteInferior = Number(document.getElementById("limiteInferior").value);
    const limiteSuperior = Number(document.getElementById("limiteSuperior").value);

    const limits = limites(limiteInferior, limiteSuperior);
})

function limites(lowerLimit, upperLimit) {
    let somaPares = 0;

    for(let i=lowerLimit; i<upperLimit; i++) {
        if(i%2 === 0) {
            somaPares += i;
            document.getElementById("result-third-question").innerHTML += i + " ";
        }
    }
    document.getElementById("result-third-question").innerHTML += "<br>Soma dos números pares: " + somaPares;
}

// ============================================
// 4ª QUESTÃO – Faça uma função ORDEM(a, b, c) que recebe 3 valores inteiros por parâmetro e
// retorna-os ordenados em ordem crescente.
// ============================================

document.getElementById("fourth-question").addEventListener("submit", function(event) {
    event.preventDefault();

    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);
    const numero3 = Number(document.getElementById("numero3").value);

    const orderedNumbers = ordem(numero1, numero2, numero3);
})

function ordem(firstValue, secondValue, thirdValue) {
    var isInteger = false;
    if(Number.isInteger(firstValue) && Number.isInteger(secondValue) && Number.isInteger(thirdValue)) {
        isInteger = true;
    }
    if(isInteger) {
        var numeros = [firstValue, secondValue, thirdValue];

        numeros.sort(function(a, b) {
            return a - b;
        })

        for(let i=0; i<3; i++) {
            document.getElementById("result-fourth-question").innerHTML += numeros[i] + " ";
        }
    }
    else {
        alert("Digite apenas números inteiros!");
    }
}

// ============================================
// 5ª QUESTÃO – Faça uma função POSITIVO_NEGATIVO(x) que recebe um valor inteiro e verifica se o
// valor é positivo ou negativo. A função deve retornar um valor booleano.
// ============================================

document.getElementById("fifth-question").addEventListener("submit", function(event) {
    event.preventDefault();

    const numero = Number(document.getElementById("numero").value);

    const ehPositivo = isPositive(numero);
})

function isPositive(value) {
    var isInteger = false;
    let isPositive = false;
    if(Number.isInteger(value)) {
        if(value > 0) {
            isPositive = true;
            document.getElementById("result-fifth-question").innerHTML = "O número é positivo: " + isPositive;
        }
        else {
            document.getElementById("result-fifth-question").innerHTML = "O número é positivo: " + isPositive;
        }
    }
    else{ 
        alert("Digite apenas números inteiros!");
    }
    return isPositive;
}

// ============================================
// 6ª QUESTÃO – Faça uma função PAR_IMPAR(x) que recebe um valor inteiro e verifica se o valor é
// par ou ímpar. A função deve retornar um valor booleano.
// ============================================

document.getElementById("sixth-question").addEventListener("submit", function(event) {
    event.preventDefault();

    const algarismo = Number(document.getElementById("algarismo").value);

    const ehPar = isEven(algarismo);
})

function isEven(value) {
    var isInteger = false;
    let isEven = false;

    if(Number.isInteger(value)) {
        if(value%2 === 0) {
            isEven = true;
            document.getElementById("result-sixth-question").innerHTML = "O número é par: " + isEven;
        }
        else{
            document.getElementById("result-sixth-question").innerHTML = "O número é par: " + isEven;
        }
    }
    else {
        alert("Digite apenas números inteiros!");
    }
}