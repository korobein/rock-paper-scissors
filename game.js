let choose;
let playerCount = 0;
let computerCount = 0;
let playerPlay

function computerPlay(){
    let pcPlay = Math.floor((Math.random()*3)+1);
    switch (pcPlay) {
        case 1:
            pcPlay = "Rock";
            break;
        case 2:
            pcPlay = "Paper";
            break;
        case 3:
            pcPlay = "Scissors";
            break;
    }
    return pcPlay.toLowerCase();
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerPlay = button.id;
        playRound();
    })
})

const playerChoose = document.querySelector('#playerChoose');
const pcChoose = document.querySelector('#pcChoose');
const playerScore = document.querySelector('#playerScore');
const pcScore = document.querySelector('#pcScore');
const currentStatus = document.querySelector('#currentStatus')

currentStatus.style.fontSize = '35px';

function playRound(playerSelection,computerSelection){
    playerSelection = playerPlay;
    computerSelection = computerPlay();
    playerChoose.textContent = `You chose ${playerSelection}`;
    pcChoose.textContent= `The AI chose ${computerSelection}`;
    if (playerSelection === computerSelection) {
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ){
        computerCount++;
    } else {
        playerCount++;
    }

    playerScore.textContent = `Player score is ${playerCount}`;
    pcScore.textContent = `AI score is ${computerCount}`;

    if (playerCount === 5){
        currentStatus.textContent = "Player is the winner!";
        playerCount = 0;
        computerCount= 0;
    } else if (computerCount === 5){
        currentStatus.textContent = "Ai is the winner!";
        playerCount = 0;
        computerCount= 0;
    } else {
        currentStatus.textContent = '';
    }
} 

