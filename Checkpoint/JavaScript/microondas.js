/*
1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.

- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 

- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;

- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";

*/

function microondas (food,time){
    if (food == 1){
        console.log(" Comida: Pipoca");
        if (time > 19 && time < 29){
            console.log(" Sua comida queimou!");
        }else if (time < 10){
            console.log(" Sua comida não está pronta!");
        }else if (time > 29){
            console.log(" KABUUUUUUUUM!");
        }else {
            console.log(" Sua Comida está Pronta");
        }

    }else if (food == 2){
        console.log(" Comida: Macarrão");
        if (time > 16 && time < 24){
            console.log(" Sua comida queimou!");
        }else if (time < 8){
            console.log(" Sua comida não está pronta!");
        }else if (time > 23){
            console.log(" KABUUUUUUUUM!");
        }else {
            console.log(" Sua Comida está Pronta");
        }

    }else if (food == 3){
        console.log(" Comida: Carne");
        if (time > 30 && time < 45){
            console.log(" Sua comida queimou!");
        }else if (time < 15){
            console.log(" Sua comida não está pronta!");
        }else if (time > 44){
            console.log(" KABUUUUUUUUM!");
        }else {
            console.log(" Sua Comida está Pronta");
        }

    }else if (food == 4){
        console.log(" Comida: Feijão");
        if (time > 23 && time < 36){
            console.log(" Sua comida queimou!");
        }else if (time < 12){
            console.log(" Sua comida não está pronta!");
        }else if (time > 35){
            console.log(" KABUUUUUUUUM!");
        }else {
            console.log(" Sua Comida está Pronta");
        }
        
    }else if (food == 5){
        console.log(" Comida: Brigadeiro");
        if (time > 16 && time < 24){
            console.log(" Sua comida queimou!");
        }else if (time < 8){
            console.log(" Sua comida não está pronta!");
        }else if (time > 23){
            console.log(" KABUUUUUUUUM!");
        }else {
            console.log(" Sua Comida está Pronta");
        }
        
    }else {
        console.log(" Nenhuma Comida Selecionada!");
    }
    

}

microondas(1,20);


// AKIRA YAMADA <3 Olha com carinho!