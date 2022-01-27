let choose;
let playerCount = 0;
let computerCount = 0;

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

function playerPlay() {
   do {
       choose = prompt("Rock, Paper or Scissors?");
       if (choose !== null) {
        choose = choose.toLowerCase();
       } else if (choose === null){
           break;
       }
   } while (choose !== "rock" && choose !== "paper" && choose !== "scissors");
   return choose;
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    console.log(`You chose ${playerSelection}`);
    console.log(`The AI chose ${computerSelection}`);
    if (playerSelection === computerSelection) {
        console.log("It's a tie game!")
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")

    ){
        console.log("You lost this one!")
        computerCount++;
        console.log(`The AI score is ${computerCount}`)
    } else if (playerSelection === null) {
        console.log("You lost this one because you didn't choose :(");
    } else {
        console.log("You won this one!")
        playerCount++;
        console.log(`The player score is ${playerCount}`)
    }
} 

function game() {
    for (let i = 0; i <= 4; i++) {
        playRound();
    }
    if (playerCount === computerCount) {
        console.log("The match is a tie!");
    } else if ( playerCount > computerCount) {
        console.log("Player is the winner")
    } else if ( playerCount < computerCount) {
        console.log("The AI is the winner")
    }
    playerCount = 0;
    computerCount = 0;
}