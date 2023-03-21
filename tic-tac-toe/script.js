const gameBoard = (() => {
    gameArray =[
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
    ] 
    return {gameArray};
})();

const player = () => {
    const sayHello = () => console.log('hello!');
    return {sayHello}
}

let body = document.querySelector('body');
let turnChoice = '0'

function showBoard(){
    clear();
    for ( let i = 0; i < gameArray.length; i++) {
        let container = document.createElement('div');
        container.classList.add('row');
        for ( let j = 0; j < gameArray[i].length; j++) {
            let containerChild = document.createElement('div');
            containerChild.classList.add('choice')
            containerChild.dataset.i = i
            containerChild.dataset.j = j
            containerChild.textContent = gameArray[i][j];
            container.appendChild(containerChild);
        }
        body.appendChild(container);
    }
    addListeners();
}
showBoard();

function clear(){
    document.body.innerHTML = "";
}

function addListeners(){
    let choices = document.querySelectorAll('.choice');
    choices.forEach(choice => choice.addEventListener('click', getAddress));
    function getAddress(e) {
        if(gameArray[e.target.getAttribute("data-i")][e.target.getAttribute("data-j")] == '-'){
            gameArray[e.target.getAttribute("data-i")][e.target.getAttribute("data-j")] = turnChoice;
            console.log(gameArray[e.target.getAttribute("data-i")][e.target.getAttribute("data-j")]); 
            showBoard();
            checkWinner();
            turn();
        }
    }
}

function turn() {
    if (turnChoice == 'X') {
        turnChoice = '0'
    }
    else {
        turnChoice = 'X'
    }
    return turnChoice;
}

// check winner from tic tac toe game array
function checkWinner() {
    // check rows
    for (let i = 0; i < gameArray.length; i++) {
        if (gameArray[i][0] == gameArray[i][1] && gameArray[i][1] == gameArray[i][2] && gameArray[i][0] != '-') {
            return console.log("Winner" + gameArray[i][0]);
        }
    }
    // check columns
    for (let i = 0; i < gameArray.length; i++) {
        if (gameArray[0][i] == gameArray[1][i] && gameArray[1][i] == gameArray[2][i] && gameArray[0][i] != '-') {
            return console.log("Winner" + gameArray[0][i]);
        }
    }
    // check diagonals
    if (gameArray[0][0] == gameArray[1][1] && gameArray[1][1] == gameArray[2][2] && gameArray[0][0] != '-') {
        return gameArray[0][0];
    }
    if (gameArray[0][2] == gameArray[1][1] && gameArray[1][1] == gameArray[2][0] && gameArray[0][2] != '-') {
        return console.log("Winner" + gameArray[0][2]);
    }
    return null;
}
