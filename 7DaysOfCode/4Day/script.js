const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = " ";
let acertou = false;

for (let contador = 0; contador < 3; contador ++) {
    chute = prompt("Tente adivinhar um número entre 0 e 10: ");
    if (chute == numeroAdivinhacao) {
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`)
        acertou = true;
        break;
    }
    alert("Errado!")
}

if (!acertou) {
    alert(`Você não acertou o número era ${numeroAdivinhacao}.`);
}