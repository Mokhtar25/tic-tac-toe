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
        
        let input_x = prompt("num: ");

        console.log(game.play(+input_x, 1).message);
        game.play(+input_x, 1);
        
        if (game.checkend().end === true){
            break;
        }
        let input_o = prompt("input o : ");
        console.log(game.play(+input_o, 2).message);

        game.play(+input_o, 2);
        console.dir(game.board)
    
    }

    console.log(game.checkend().type);

} 

RunGame('1', 2);


