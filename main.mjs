import promptSync from 'prompt-sync';

const prompt = promptSync();

import playergenrator from "./user.mjs"
import gamegenrator from "./creategame.mjs";

const CreateGame = gamegenrator();
const Createplayer = playergenrator();

function RunGame(player1, player2){

    const x = player1;
    const o = player2;

    const game = CreateGame();
    while (game.checkend().end === false){
        
        let input_x;
        do {
            let temp_x = prompt("num: ");
           input_x = game.play(+temp_x, 1); 
            console.dir(input_x)
            if (input_x.message !== ""){
                console.log(input_x.message)
            }  
        } while (input_x.input === false)
        // console.log(game.play(+input_x, 1).message);
        // game.play(+input_x, 1);
       console.dir(game) 
        console.log(game.checkend())
        if (game.checkend().end === true){
            break;
        }


        let input_o;
        do {
            let temp_o = prompt("input o : ");
           input_o = game.play(+temp_o, 2); 
            if (input_o.input === false){
                console.log(input_o.message)
            }  
        } while (input_o.input === false) 
       console.dir(game) 

        console.log(game.checkend())
    }

    let gameend = game.checkend().type;
    switch (gameend) {
        case 1:
            gameend = `Winner is X`
            break;
        case 2:
            gameend = `Winner is O`

        default:
            gameend = `Game is a Tie`
            break;
    }
    console.log(gameend);
} 
// while (true){
RunGame(1, 2);



