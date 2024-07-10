let comida = "";
let lista;
let frutas = [];
let legumes = [];
let laticinios = [];
let doces = [];

while (true) {
    lista = prompt("Quer adicionar algo à sua lista de compras? Digite SIM ou NÃO.").toUpperCase().trim();

    if (lista === "SIM") {
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
    } else if (lista === "NÃO") {
        alert("Ok, obrigado!");
        break;
    } else {
        alert("Erro! Digite SIM ou NÃO.");
    }
}

alert(`A sua lista de compras:\n 
    Frutas: ${frutas}\n 
    Legumes: ${legumes}\n 
    Laticínios: ${laticinios}\n 
    Doces: ${doces}\n`);


