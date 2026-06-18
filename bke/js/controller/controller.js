console.log("Connected controller");

//beginwaardes (nog 0 zetten gedaan en gameover is nog niet actief)
let moves = 0;
let gameOver = false;

//zorgt voor klik in vakje -> juiste symbool in dat vakje
function handleBoxClick(event) {
  if (gameOver) return;

  const index = Number(event.target.id.replace("box", "")) - 1;

  if (!isFicheAllowed(index)) return;

  setFiche(index, activeSymbol);
  showFiches();
  moves++;

//als deze functie waar is -> winnaar tekst maken + na 3 sec nieuwe ronde + punt naar winner functie aanroepen
  if (isWinner()) {
    winnerText.innerHTML = "<h3>Speler " + activeSymbol + " heeft gewonnen!</h3>";
    addPointToWinner(activeSymbol);
    gameOver = true;
    setTimeout(startNewRound, 3000);
    return;
  }

  //als de alle zetten zijn gedaan -> geef gelijkspel aan en begin nieuwe ronde na 5 sec
  if (moves === 9) {
    winnerText.innerHTML = "<h3>Gelijkspel!</h3>";
    gameOver = true;
    setTimeout(startNewRound, 5000);
    return;
  }

  changeActiveSymbol();
  updatePlayerTurn(activeSymbol);
}

//functie voor +1 punt aan winnaar geven
function addPointToWinner(symbol) {
  if (symbol === "X") {
    playerXScore.innerHTML = Number(playerXScore.innerHTML) + 1;
  } else {
    playerOScore.innerHTML = Number(playerOScore.innerHTML) + 1;
  }
}

// functie voor nieuwe ronde starten (moves weer naar 0, spelerbeurt reset, leeg speelveld maken)
function startNewRound() {
  for (let i = 0; i < fiches.length; i++) {
    fiches[i] = "";
  }

  moves = 0;
  gameOver = false;
  activeSymbol = "X";

  showFiches();
  updatePlayerTurn(activeSymbol);
  winnerText.innerHTML = "";
}

//resetknop -> score naar 0 en leeg speelveld
function resetClick() {

  playerXScore.innerHTML = 0;
  playerOScore.innerHTML = 0;

  startNewRound();
}

//eventlistener resetknop
resetBtn.addEventListener("click", resetClick);