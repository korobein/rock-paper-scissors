let playerChoose;
let roundCount = 0;
let playerCount = 0;
let pcCount = 0;
const PC_PLAY = document.querySelector("#pc-play");
const PLAYER_PLAY = document.querySelectorAll("input[type='image']");
const PLAYER_SCORE = document.querySelector("#jugCont");
const PC_SCORE = document.querySelector("#pcCont");
const WINNER = document.querySelector("#ganador");
const NEWGAME = document.getElementById("newgame")

NEWGAME.addEventListener('click', () =>{
  roundCount = 0;
  playerCount = 0;
  pcCount = 0;
  WINNER.textContent = "";
  PLAYER_SCORE.textContent = "0";
  PC_SCORE.textContent = "0";
  PC_PLAY.src = "./img/signopregunta.png"
  PLAYER_PLAY.forEach(coso => coso.disabled = false);
  PLAYER_PLAY.forEach(item => item.style.background ="none");
  PC_PLAY.style.background = "none";
  WINNER.textContent = "¡Elige!"
} )

PLAYER_PLAY.forEach(mano => mano.addEventListener('click', () =>{
      playerChoose = mano.id;
      playRound();
    }))

function whoWon(){
  PLAYER_PLAY.forEach(coso => coso.disabled = true);

  if(pcCount === playerCount){
    WINNER.textContent = "Fue un empate..."
  } else if(playerCount > pcCount) {
    WINNER.textContent = "¡Ganaste!"
  } else {
    WINNER.textContent = "La I.A. ganó :("
  }

}
function pcSelection(){
  let random = Math.floor(Math.random()*3);
  switch(random){
    case 0:
      PC_PLAY.src = "./img/hands/piedra-removebg-preview.png";
      break;
    case 1:
      PC_PLAY.src = "./img/hands/papel-removebg-preview.png";
      break;
    case 2:
      PC_PLAY.src = "./img/hands/tijeras-removebg-preview.png";
      break;
  }
  return random;
}

function playRound(player,pc){
  PLAYER_PLAY.forEach(item => item.style.background ="none")
  PC_PLAY.style.background = "none";
  player = playerChoose;
  pc = pcSelection();
  if (player == 0 && pc === 2 ||
    player == 1 && pc === 0 ||
    player == 2 && pc === 1) {
      PLAYER_PLAY.forEach(item => {
        if(item.id == player){
          item.style.background = "#00ff33"
        }
      })
      PC_PLAY.style.background = "#ff0d00";
      playerCount++;
} else if (player == 0 && pc === 1 ||
  player == 1 && pc === 2 ||
  player == 2 && pc === 0) {
    PLAYER_PLAY.forEach(item => {
      if(item.id == player){
        item.style.background = "#ff0d00"
      }
    })
    PC_PLAY.style.background = "#00ff33"
    pcCount++;
  } else {
    PLAYER_PLAY.forEach(item => {
      if(item.id == player){
        item.style.background = "#ff8c00"
      }
    })
    PC_PLAY.style.background = "#ff8c00"

  }
  PLAYER_SCORE.textContent = playerCount;
  PC_SCORE.textContent = pcCount;
  roundCount++;

  if(playerCount>=3 || pcCount>=3 || roundCount === 5){
    whoWon();
  }
}




  


