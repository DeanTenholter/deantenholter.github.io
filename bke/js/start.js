console.log("Connected start");

//als de pagina laadt -> begin start functie
window.onload = start;

//startfunctie
function start() {
  bindBoxes();
  updatePlayerTurn(activeSymbol);
}
