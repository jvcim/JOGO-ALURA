    let numeroSecreto = parseInt(Math.random() * 1001);
    let chute

    while(chute != numeroSecreto) {
        let chute = prompt ('Tente adivinhar o número de 0 a 1000')
        //se o chute for igual ao número secreto
        if (chute == numeroSecreto) {
            alert ('Você acertou, Parabéns!')
        } 
        else if  (chute > numeroSecreto){
            alert ('Errou... O número secreto é menor!')
        }
        else if (chute < numeroSecreto) {
            alert ('Errou... O número secreto é maior"')
        }
    }
