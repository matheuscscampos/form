
let choiceOption = ['Rock', 'Paper', 'Scissors']
let getComputerChoice = (array) => array[Math.floor(Math.random() * array.length)];

let playRound = function (playerSelection, computerSelection){
    computerSelection = computerSelection.toUpperCase();
    playerSelection = playerSelection.toUpperCase();
    
    dict = {
        ROCK:"SCISSORS",
        SCISSORS: "PAPER",
        PAPER: "ROCK"
    }  
    
    if (computerSelection == playerSelection){
        console.log("Draw!");
        return 0;
    }
    else if (playerSelection == dict[computerSelection]){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return  -1;
    }
    else {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)
        return 1;
    }
}

let game = function() {
    score = 0
    for (let i=0; i<5; i++) {
        let computerSelection = getComputerChoice(choiceOption);
        let playerSelection = prompt("What's your choice?");
        score = score + playRound(playerSelection, computerSelection);
    }
    checkWinner();
}

let checkWinner = function(){
    if (score > 0){
        console.log('You won!');
    }
    else if (score == 0){
        console.log('Draw!');
    }
    else {
        console.log('You lost!');
    }
}

game();