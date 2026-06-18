console.log("Connected view");

//html ophalen
const winnerText = document.querySelector('#winner-text');
const boxes = document.querySelectorAll('#boxes div');
const playerTurn = document.querySelector('#playerTurn');
const resetBtn = document.querySelector('#reset-btn');

//html ophalen van scores
const playerXScore = document.querySelector('#playerXScore');
const playerOScore = document.querySelector('#playerOScore');

//voor het klikken in het speelveld
function bindBoxes() {
  for (let b = 0; b < boxes.length; b++) {
    boxes[b].addEventListener('click', handleBoxClick);
  }
}

//toont de x/o voor de speler in het speelveld
function showFiches() {
  for (let b = 0; b < boxes.length; b++) {
    boxes[b].innerHTML = fiches[b];
  }
}

//verandert de text voor welke speler er aan de beurt is.
function updatePlayerTurn(symbol) {
  playerTurn.innerHTML = "Speler " + symbol + " is aan de beurt";
}
