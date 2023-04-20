function soma(num1, num2){
    return num1 + num2;
}

function subtracao(num1, num2){
    return num1 - num2;
}

function multiplicacao(num1, num2){
    return num1 * num2;
}

function divisao(num1, num2) {
    if(num2 == 0){
        return "Não é possivel dividir por zero";
    }
    else{
        return num1 / num2;
    }
}

let sair = false;

while (!sair){
    let resposta = prompt("Bem vindo\nEscolha a operação:\n[1] Soma\n[2] Subtraçãoo\n[3] Multiplicação\n[4] Divisão\n[5] Sair")
    if (resposta != "5"){
        num1 = parseInt(prompt("Digite o primeiro número:"))
        num2 = parseInt(prompt("Digite o segundo número:"))
    }
    switch(resposta){
        case "1":
            alert(`O resultado da soma foi ${soma(num1,num2)}`)
            break
        case "2":
            alert(`O resultado da subtração foi ${subtracao(num1,num2)}`)
            break
        case "3":
            alert(`O resultado da multiplicação foi ${multiplicacao(num1,num2)}`)
            break
        case "4":
            alert(`O resultado da divisão foi ${divisao(num1,num2)}`)
            break
        case "5":
            sair = true
            alert("Até a próxima")
            break
    }
}