let frutas = [];
let laticineos = [];
let congelados = [];
let doces = [];

let continuar = true;

while (continuar) {
    let resposta = prompt("Deseja adicionar uma comida a lista de compras?[1]\nRemover algum iten da lista?[2]\nImprimir lista e sair[3]")
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
    else if(resposta== 2){
        var remover = prompt(`Lista de compras:\nFrutas: ${frutas}\nLaticineos ${laticineos}\nCongelados: ${congelados}\nDoces: ${doces}\nQual elemento deseja remover?`)
        if(frutas.includes(remover)){
            var posicao = frutas.indexOf(remover)
            frutas.splice(posicao,1)
            alert(`Item ${remover} removido`)
        }
        else if(laticineos.includes(remover)){
            var posicao = laticineos.indexOf(remover)
            laticineos.splice(posicao,1)
            alert(`Item ${remover} removido`)
        }
        else if(congelados.includes(remover)){
            var posicao = congelados.indexOf(remover)
            congelados.splice(posicao,1)
            alert(`Item ${remover} removido`)
        }
        else if(doces.includes(remover)){
            var posicao = doces.indexOf(remover)
            doces.splice(posicao,1)
            alert(`Item ${remover} removido`)
        }
        else{
            alert("Não foi possivel encontrar o item na lista")
        }
        
    }
    else if (resposta == 3) {
        continuar = false;
    }
}

alert(`Lista de compras:\nFrutas: ${frutas}\nLaticineos: ${laticineos}\nCongelados: ${congelados}\nDoces: ${doces}`)