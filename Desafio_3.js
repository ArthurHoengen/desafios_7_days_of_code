var opcao_1 = "";
var opcao_2 = "";
var opcao_3 = "";
var tecnologias = "";
var resposta = "";
while(opcao_1 != 1 && opcao_1 != 2){
    opcao_1 = prompt("Olá, você gostará de seguir para a área de Front-end(1) ou Backend(2)?");
}

if(opcao_1 == 1){
    while(opcao_2 != 1 && opcao_2 != 2){
        opcao_2 = prompt("Na área de Front-end, você gostaria de aprender React(1) ou Vue(2)?");
    }
}
if(opcao_1 == 2){
    while(opcao_2 != 1 && opcao_2 != 2){
        opcao_2 = prompt("Na área de Back-end, você gostaria de aprender C#(1) ou Java(2)?");
    }
}

while(opcao_3 != 1 && opcao_3 != 2){
    opcao_3 = prompt("Você vai seguir se especializando na área escolhida(1) ou seguir se desenvolvendo para se tornar Fullstack(2)?");
    if(opcao_3 == 1){
        alert("Certo! Aprenda o máximo que você puder dessa área então!")
    }
    if(opcao_3 == 2){
        alert("Certo! Então você vai precisar aprender um pouco de tudo!")
    }
}

while(resposta != "2"){
    resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Sim(1) Não(2)");
    if(resposta == 1 && tecnologias == ""){
        tecnologias += prompt("Certo, qual tecnologia ainda pretende aprender?")
    }
    else if(resposta == 1){
        tecnologias += ", " + prompt("Certo, qual tecnologia ainda pretende aprender?")
    }
}
alert(`Certo, então você ainda precisa aprender ${tecnologias}!`);