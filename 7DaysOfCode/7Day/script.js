let numUm = "";
let numDois = "";
let resultado;

function somar(numUm, numDois) {
    return numUm + numDois;
}

function subtrair(numUm, numDois) {
    return numUm - numDois;
}

function multiplicar(numUm, numDois) {
    return numUm * numDois;
}

function dividir(numUm, numDois) {
    if (numDois === 0) {
        return "ERRO! Divisão por zero não é permitido!";
    }
    return numUm / numDois;
}

function calcular() {
    const operacao = prompt("Escolha uma operação: Somar, Subtrair, Multiplicar, Dividir ou Sair").toLowerCase().trim();

    if (operacao == "sair") {
        alert("A calculadora foi encerrada!");
        return;
    }

    const numUm = parseFloat(prompt("Digite o primeiro valor:"));
    const numDois = parseFloat(prompt("Digite o segundo valor:"));

    switch (operacao) {
        case "somar":
            resultado = somar(numUm, numDois);
            break;

        case "subtrair":
            resultado = subtrair(numUm, numDois);
            break;

        case "multiplicar":
            resultado = multiplicar(numUm, numDois);
            break;

        case "dividir":
            resultado = dividir(numUm, numDois);
            break;

        default:
            resultado = "Operação inválida!";
            break;
    }
    alert("O resultado é: " + resultado);
}

calcular();
