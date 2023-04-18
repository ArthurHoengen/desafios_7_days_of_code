let frutas = [];
let laticineos = [];
let congelados = [];
let doces = [];

let continuar = true;

while (continuar) {
    let resposta = prompt("Deseja adicionar uma comida a lista de compras? Sim[1] ou Não[2]")
    if (resposta == 1) {
        item = prompt("Qual comida deseja inserir?")
        categoria = prompt("Em qual categoria esse item se encaixa? Frutas[1], laticineos[2], congelados[3] ou doces[4]")
        switch (categoria) {
            case "1":
                frutas.push(item);
                break;
            case "2":
                laticineos.push(item);
                break;
            case "3":
                congelados.push(item);
                break;
            case "4":
                doces.push(item);
                break;
            default:
                alert("Categoria inexistente");
                break;
        }
    }
    else if (resposta == 2) {
        continuar = false;
    }
}

alert(`Lista de compras:\nFrutas: ${frutas}\nLaticineos ${laticineos}\nCongelados: ${congelados}\nDoces: ${doces}`)