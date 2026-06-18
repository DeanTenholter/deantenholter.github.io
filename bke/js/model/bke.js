console.log("Connected model");

//waarde voor welke speler er aan de beurt is -> X/O
let activeSymbol = "X";

//array voor het lege speelveld, wordt gevuld met juiste symbool
const fiches = ["", "", "", "", "", "", "", "", ""];

//zet het bijbehorende teken bij in het vakje voor de speler die aan de beurt is
function setFiche(id, fiche) {
  fiches[id] = fiche;
}

//alleen als een vakje leeg is, kan er iets worden gezet
function isFicheAllowed(id) {
  return fiches[id] === "";
}

//verandert het symbool na een beurt
function changeActiveSymbol() {
  activeSymbol = activeSymbol === "X" ? "O" : "X";
}

//functie voor winnende combinaties, zodat het spel kan herkennen wanneer er gewonnen is
function isWinner() {
  if (
    (fiches[0] === activeSymbol && fiches[1] === activeSymbol && fiches[2] === activeSymbol) ||
    (fiches[3] === activeSymbol && fiches[4] === activeSymbol && fiches[5] === activeSymbol) ||
    (fiches[6] === activeSymbol && fiches[7] === activeSymbol && fiches[8] === activeSymbol) ||
    (fiches[0] === activeSymbol && fiches[4] === activeSymbol && fiches[8] === activeSymbol) ||
    (fiches[2] === activeSymbol && fiches[4] === activeSymbol && fiches[6] === activeSymbol) ||
    (fiches[0] === activeSymbol && fiches[3] === activeSymbol && fiches[6] === activeSymbol) ||
    (fiches[1] === activeSymbol && fiches[4] === activeSymbol && fiches[7] === activeSymbol) ||
    (fiches[2] === activeSymbol && fiches[5] === activeSymbol && fiches[8] === activeSymbol)
  ) {
    return true;
  }
  return false;
}