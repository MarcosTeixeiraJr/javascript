let comida = "";
let lista;
let frutas = [];
let legumes = [];
let laticinios = [];
let doces =[];

while (true) {
    lista = prompt("Quer adicionar ou remover algo da sua lista de compras? Digite ADICIONAR, REMOVER ou SAIR.").toUpperCase().trim();

    if (lista === "ADICIONAR") {
        let item = prompt("O que deseja adicionar à lista?").toUpperCase().trim();
        let categoria = prompt("Em qual categoria esse item se encaixa: frutas, legumes, laticínios ou doces?").toUpperCase().trim();

        switch (categoria) {
            case "FRUTAS":
                frutas.push(item);
                break;

            case "LEGUMES":
                legumes.push(item);
                break;

            case "LATICINIOS":
                laticinios.push(item);
                break;

            case "DOCES":
                doces.push(item);
                break;

            default:
                alert("Categoria inválida! O item não foi adicionado.");
        }
    } else if (lista === "REMOVER") {
        alert(`A sua lista de compras:\n
            Frutas: ${frutas}\n
            Legumes: ${legumes}\n
            Laticínios: ${laticinios}\n
            Doces: ${doces}\n`);
            
        let item = prompt("O que deseja remover da lista?").toUpperCase().trim();
        let categoria = prompt("De qual categoria esse item faz parte: frutas, legumes, laticínios ou doces").toUpperCase().trim();

        switch (categoria) {
            case "FRUTAS":
                frutas = frutas.filter(i => i !== item);
                break;

            case "LEGUMES":
                legumes = legumes.filter(i => i !== item);
                break;

            case "LATICINIOS":
                laticinios = laticinios.filter(i => i !== item);
                break;

            case "DOCES":
                doces = doces.filter(i => i !== item);
                break;

            default:
                alert("Categoria inválida! O item não foi removido.");
        }
    } else if (lista === "SAIR") {
        alert("Ok, obrigado!");
        break;
    } else {
        alert("Erro! Digite ADICIONAR ou REMOVER ou SAIR.");
    }
}

alert(`A sua lista de compras:\n
    Frutas: ${frutas}\n
    Legumes: ${legumes}\n
    Laticínios: ${laticinios}\n
    Doces: ${doces}\n`);