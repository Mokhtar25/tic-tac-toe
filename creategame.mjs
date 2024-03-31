

function Createboard(){
    
   let board = [
   [0,0,0],
    [0,0,0],
       [0,0,0]
   ];

    return {board};
}




export default function gamegenrator(){
    let games = 0;
return function CreateGame(){
    games++
    let game_number = games; 
    let plays = 0;

    const _borad = Createboard();
    const borad= _borad.board;
    
    function play(num, type){
            
        let i = 0;
        let j = 0;
        switch (num) {
            case 1:
                break;
            case 2:
                i = 0;
                j = 1;
                break;
            case 3:
                i = 0;
                j = 2;
                break;
            case 4:
                i = 1;
                j = 0;
                break;
            case 5:
                i = 1;
                j = 1;
                break;
            case 6:
                i = 1;
                j = 2;
                break;
            case 7:
                i = 2;
                j = 0;
                break;
            case 8:
                i = 2;
                j = 1;
                break;
            case 9:
                i = 2;
                j = 2;
                break;

            default:
            return {input:false, message:"Please input a valid Box"};
        }
        if (borad[i][j] !== 0){
            return {input:false, message:"Place already chosen"};
        }
        borad[i][j] = type; 
        plays = plays + 1;
        
        return {input:true, message:""}
    } 

function checkend(){
            
            // checking sides horzintal
            for (let i = 0; i < 3; i++){
                let currnet = borad[i][0];
                if (currnet === borad[i][1] && currnet === borad[i][2]){
                    if (currnet !== 0){
                    return {end:true, type:currnet, check:"h1"};
                    }
                }
                let currnetx = borad[0][i]
                if (currnetx === borad[1][i] && currnetx === borad[2][i]){
                    if (currnetx !== 0){
                    return {end:true, type:currnetx, check:"v1"}
                    }
                }

            }
    if (borad[0][0] === borad[1][1] && borad[0][0] === borad[2][2]){
        if (borad[0][0]!== 0){
        return {end:true, type:borad[0][0], check:'vh1'}
        }
    }
    if (borad[0][2] === borad[1][1] && borad[0][2] === borad[2][0]){
        if (borad[0][2] !== 0){
        return {end:true, type:borad[0][2], check:'vh2'}
    }}
            if (plays >= 9){
                return {end:true, type:"draw"}
            }

    return {end:false, type:null}
}
return {game_number, plays, checkend, play, board:borad}
}
}


