const area = prompt('Qual área você quer seguir: FRONT-END ou BACK-END?').toUpperCase().trim();
let linguagem = '';
if (area == 'FRONT-END') {
    linguagem = prompt('Você quer aprender REACT ou VUE?').toUpperCase().trim();
} else if (area == 'BACK-END') {
    linguagem = prompt('Você quer aprender C# ou JAVA?').toUpperCase().trim();
} else {
    alert('Você não inseriu uma área válida!');
}

const especialidadeOuFullstack = prompt('Digite 1 para se especializar na área escolhida ou 2 para se tornar Fullstack.');
if (especialidadeOuFullstack == 1) {
    alert(`Continue se especializando na linguagem ${linguagem} para se tornar especialista em ${area}.`);
} else if (especialidadeOuFullstack == 2) {
    alert(`É hora de aprender outras linguagens além de ${linguagem} para se tornar um Fullstack.`);
} else {
    alert('Você não inseriu um valor válido!');
}

let msg = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite OK em caso de sim!').toUpperCase().trim();
while (msg == 'OK') {
    let novaTecnologia = prompt('Qual?').trim();
    alert(`${novaTecnologia} é uma tecnologia muito legal!`);
    msg = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite OK em caso de sim!').toUpperCase().trim();
}
