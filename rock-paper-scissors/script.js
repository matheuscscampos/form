
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
        return  ++computerScore;
    }
    else {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)
        return ++playerScore;
    }
}

let playerScore = 0;
let computerScore = 0;

let game = function() {
    let computerSelection = getComputerChoice(choiceOption);
    playRound(playerSelection, computerSelection);
    player.textContent = playerScore;
    computer.textContent = computerScore;
    checkWinner();
}

let checkWinner = function(){
    if (playerScore > 4){
        alert('You won!');
    }
    else if (computerScore >4){
        alert('You lost!');
    }
}

const btn = document.querySelectorAll('.btn-play');
const player = document.querySelector('.player-score');
const computer = document.querySelector('.computer-score');

btn.forEach(item => {
    item.addEventListener('click', event => {
    playerSelection = event.target.innerHTML;
    game();
    })
})
