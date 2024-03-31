

// import playergenrator from "./user.mjs"
import gamegenrator from "./creategame.mjs";

const CreateGame = gamegenrator();
// const Createplayer = playergenrator();


const boxes = document.querySelectorAll('.grid-game *');
const update = document.querySelector('.update-div')
update.textContent = `New Game!`
function RunGame(player1, player2){

    let game = CreateGame();

   let gameover = false 
    let current = 1;
        boxes.forEach((e)=>{
            e.addEventListener('click', ()=>{
                
                if (gameover === true){
                    game = CreateGame();
                    boxes.forEach((e)=>{e.textContent = ''})
                    gameover = false
                    update.textContent = 'New Game!'
                    return 0;
                }

                let input = inputweb(e.attributes.value.textContent, current);

                console.log(game.board, game.checkend())
                if (input.input === false){
                    update.textContent = input.message;
                    return 1;
                }
                else{
                    if (current === 1){
                        e.textContent = "X";
                        current = 2
                    }
                    else{
                        e.textContent = "O";
                        current = 1
                    } 
                      }

                if (game.checkend().end === true) {
                    let temp = displaywin()
                    update.textContent = `${temp}!, Click any box to start a new game!`
                    gameover = true
                    // update.textContent =`${temp}!,  New game will start in 5 seconds`;
    // setTimeout(() => {
        // boxes.forEach((e) => { e.textContent = ""; });
        // game = CreateGame();
    // }, 5000);
}

            })
        })

    function inputweb(num, type){
        let input = game.play(+num, type);
        return input
    }

    // while (game.checkend().end === false){
    
    






        // let input_x;
        // do {
        //     let temp_x = prompt("num: ");
        //    input_x = game.play(+temp_x, 1); 
        //     if (input_x.message !== ""){
        //         console.log(input_x.message)
        //     }  
        // } while (input_x.input === false)
        // if (game.checkend().end === true){
        //     break;
        // }
        //
        //
        // let input_o;
        // do {
        //     let temp_o = prompt("input o : ");
        //    input_o = game.play(+temp_o, 2); 
        //     if (input_o.input === false){
        //         console.log(input_o.message)
            // }  
        // } while (input_o.input === false) 
    // }
function displaywin() {
    if (game.checkend().end === true) {
        let gameend = game.checkend().type;

        switch (gameend) {
            case 1:
                gameend = 'Winner is X';
                break;
            case 2:
                gameend = 'Winner is O';
                break;
            case 'draw':
                gameend = 'Game is a Tie';
                break;
            default:
                gameend = 'error';
        }
        return gameend;
    } else {
        return ''; // Return empty string if the game hasn't ended
    }
}
}






RunGame(1, 2);



