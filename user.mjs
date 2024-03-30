


function playergenrator(){
    let players = 0;

    return function CreatePlayer (name){
        if (!name){
            players++;
            name = `Player${players}`
        }
        return {name};

    };
}    

export default playergenrator;

