const num = Math.floor(Math.random() * 9 + 1)
for(let i = 0; i < 3; i++){
    let chute = prompt("Acabei de pensar em um número de 1 a 10, em qual número eu pensei?");
    if(chute==num){
        alert("PARABÉNS! VOCÊ ACERTOU!");
        break;
    }
    else if(i<2){
        alert(`Você errou, você tem mais ${2-i} tentativas.`);
    }
    else{
        alert("Você errou. =C")
    }
}