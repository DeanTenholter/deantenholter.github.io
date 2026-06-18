console.log("Connected");

// ALLE VRAGEN IN EEN ARRAY
const vragen = [
  {
    vraag: "1. Wanneer is Microsoft opgericht?",
    antwoordA: "4 april 1975",
    antwoordB: "20 november 1976",
    antwoordC: "16 juli 1978",
    antwoordD: "8 februari 1973",
    juiste: "A"
  },
  {
    vraag: "2. Waar staat CPU voor?",
    antwoordA: "Connecting Powering Unit",
    antwoordB: "Connecting Processing Unit",
    antwoordC: "Central Processing Unit",
    antwoordD: "Conductive Powering Unit",
    juiste: "C"
  },
  {
    vraag: "3. Waar staat de afkorting Wi-Fi voor?",
    antwoordA: "Windowed Fidelity",
    antwoordB: "Wireless Fidelity",
    antwoordC: "Wired Fidelity",
    antwoordD: "Wireless Firewall",
    juiste: "B"
  },
  {
    vraag: "4. Wie is de CEO van Nvidia?",
    antwoordA: "Lip-Bu Tan",
    antwoordB: "Jen-Hsun Huang",
    antwoordC: "Elon Musk",
    antwoordD: "Mark Zuckerberg",
    juiste: "B"
  },
  {
    vraag: "5. Wat is de functie van de CPU?",
    antwoordA: "Opslag van bestanden",
    antwoordB: "Verwerken van grafisch beeld",
    antwoordC: "Koelen van het systeem",
    antwoordD: "Uitvoeren van berekeningen",
    juiste: "D"
  },
  {
    vraag: "6. Wat is een voorbeeld van een besturingssysteem?",
    antwoordA: "Microsoft Word",
    antwoordB: "Google Chrome",
    antwoordC: "Windows 11",
    antwoordD: "Adobe Photoshop",
    juiste: "C"
  },
  {
    vraag: "7. Wat doet een SSD in een computer?",
    antwoordA: "Gegevens opslaan",
    antwoordB: "Schermresolutie verhogen",
    antwoordC: "Geluid verwerken",
    antwoordD: "De internetverbinding verbeteren",
    juiste: "A"
  },
  {
    vraag: "8. Wat is een firewall?",
    antwoordA: "Een beveiligingssysteem voor netwerken",
    antwoordB: "Een antivirusprogramma",
    antwoordC: "Een grafische kaart",
    antwoordD: "Een type kabel",
    juiste: "A"
  },
  {
    vraag: "9. Wat is de functie van RAM in een computer?",
    antwoordA: "Tijdelijke opslag voor actieve processen",
    antwoordB: "Permanente opslag",
    antwoordC: "Internetverbinding",
    antwoordD: "Verwerken van video",
    juiste: "A"
  },
  {
    vraag: "10. Waar staat HTML voor?",
    antwoordA: "Home Terminal Machine Logic",
    antwoordB: "Hyperlink Transfer Module",
    antwoordC: "HyperText Markup Language",
    antwoordD: "High-Tech Machine Language",
    juiste: "C"
  },
  {
    vraag: "11. Wat is een IP-Adres?",
    antwoordA: "Een wachtwoord",
    antwoordB: "Een unieke identificatie voor een apparaat op een netwerk",
    antwoordC: "Een grafische instelling",
    antwoordD: "Een type software",
    juiste: "B"
  },
  {
    vraag: "12. Wat is een voorbeeld van een open-scource besturingssysteem?",
    antwoordA: "MacOs",
    antwoordB: "Chrome",
    antwoordC: "Linux",
    antwoordD: "Windows",
    juiste: "C"
  },
  {
    vraag: "13. Wat is een algortime?",
    antwoordA: "Een netwerkprotocol",
    antwoordB: "Een grafische kaart",
    antwoordC: "Een type computer",
    antwoordD: "Een reeks instructies om een probleem op te lossen",
    juiste: "D"
  },
  {
    vraag: "14. Wat is een VPN?",
    antwoordA: "Een type printer",
    antwoordB: "Een cloudservice",
    antwoordC: "Een videospel",
    antwoordD: "Een beveiligde netwerkverbinding",
    juiste: "D"
  },
  {
    vraag: "15. Welke technologie maakt gebruik van licht om gegevens over te dragen via glasvezel?",
    antwoordA: "NFC",
    antwoordB: "Fiber-Optic",
    antwoordC: "Li-FI",
    antwoordD: "Bluetooth",
    juiste: "B"
  },
  {
    vraag: "16. Wat is het voordeel van een SSD ten opzichte van een HDD?",
    antwoordA: "SSD's zijn sneller en stiller",
    antwoordB: "SSD's hebben zijn goedkoper",
    antwoordC: "SSD's hebben meer opslagcapaciteit",
    antwoordD: "SSD's hebben bewegende onderdelen",
    juiste: "A"
  },
  {
    vraag: "17. Wat betekent de afkorting URL?",
    antwoordA: "Uniform Rescource Locator",
    antwoordB: "Universal Routing Locator",
    antwoordC: "Unified Remote Login",
    antwoordD: "User Registration Link",
    juiste: "A"
  },
  {
    vraag: "18. Wat doet een moederbord in een computer?",
    antwoordA: "Het beheert het besturingssysteem",
    antwoordB: "Het verwerkt grafische data",
    antwoordC: "Het regelt de stroomtoevoer naar componenten",
    antwoordD: "Het coördineert de communicatie tussen hardwareonderdelen",
    juiste: "D"
  },
  {
    vraag: "19. Waar staat USB voor?",
    antwoordA: "Unified System Bus",
    antwoordB: "User Signal Buffer",
    antwoordC: "Unstructured Software Bridge",
    antwoordD: "Universal Serial Bus",
    juiste: "D"
  },
  {
    vraag: "20. Welk bedrijf heeft het bestuuringssysteem 'Android' ontwikkelt?",
    antwoordA: "Apple",
    antwoordB: "Samsung",
    antwoordC: "Google",
    antwoordD: "Microsoft",
    juiste: "C"
  },
];

let huidigeVraag = 0;
let fiftyFiftyGebruikt = false;

// HTML elementen ophalen
const vraagElement = document.getElementById("question");
const antwoordKnopA = document.getElementById("antwoordA");
const antwoordKnopB = document.getElementById("antwoordB");
const antwoordKnopC = document.getElementById("antwoordC");
const antwoordKnopD = document.getElementById("antwoordD");
const feedbackDiv = document.getElementById("feedback");
const fiftyFiftyKnop = document.getElementById("fiftyFifty");
const volgendeKnop = document.getElementById("volgende");
const vorigeKnop = document.getElementById("vorige");

// Functie om een vraag te laden
function laadVraag() {
  const vraag = vragen[huidigeVraag];
  vraagElement.textContent = vraag.vraag;
  antwoordKnopA.textContent = vraag.antwoordA;
  antwoordKnopB.textContent = vraag.antwoordB;
  antwoordKnopC.textContent = vraag.antwoordC;
  antwoordKnopD.textContent = vraag.antwoordD;

  feedbackDiv.textContent = "";
  fiftyFiftyGebruikt = false;
  fiftyFiftyKnop.disabled = false;

  // knoppen resetten
  antwoordKnopA.disabled = false;
  antwoordKnopB.disabled = false;
  antwoordKnopC.disabled = false;
  antwoordKnopD.disabled = false;

  antwoordKnopA.classList.remove("verberg");
  antwoordKnopB.classList.remove("verberg");
  antwoordKnopC.classList.remove("verberg");
  antwoordKnopD.classList.remove("verberg");
}

//Controleer antwoord
function controleerAntwoord(gekozenLetter) {
  const vraag = vragen[huidigeVraag];

  antwoordKnopA.disabled = true;
  antwoordKnopB.disabled = true;
  antwoordKnopC.disabled = true;
  antwoordKnopD.disabled = true;

  if (gekozenLetter === vraag.juiste) {
    feedbackDiv.textContent = "Goed!";
  } else {
    feedbackDiv.textContent = "Fout!";
  }
}

//event liseners voor knoppen
antwoordKnopA.addEventListener("click", function() {
  controleerAntwoord("A");
});
antwoordKnopB.addEventListener("click", function() {
  controleerAntwoord("B");
});
antwoordKnopC.addEventListener("click", function() {
  controleerAntwoord("C");
});
antwoordKnopD.addEventListener("click", function() {
  controleerAntwoord("D");
});

// Fifty-Fifty knop
fiftyFiftyKnop.addEventListener("click", function() {
  if (fiftyFiftyGebruikt) {
    return;
  }

  fiftyFiftyGebruikt = true;
  fiftyFiftyKnop.disabled = true;

  const vraag = vragen[huidigeVraag];
  let verbergTeller = 0;

  if (vraag.juiste !== "A" && verbergTeller < 2) {
    antwoordKnopA.classList.add("verberg");
    verbergTeller = verbergTeller + 1;
  }
  if (vraag.juiste !== "B" && verbergTeller < 2) {
    antwoordKnopB.classList.add("verberg");
    verbergTeller = verbergTeller + 1;
  }
  if (vraag.juiste !== "C" && verbergTeller < 2) {
    antwoordKnopC.classList.add("verberg");
    verbergTeller = verbergTeller + 1;
  }
  if (vraag.juiste !== "D" && verbergTeller < 2) {
    antwoordKnopD.classList.add("verberg");
    verbergTeller = verbergTeller + 1;
  }
});

// Volgende vraag
volgendeKnop.addEventListener("click", function() {
  if (huidigeVraag < vragen.length - 1) {
    huidigeVraag = huidigeVraag + 1;
    laadVraag();
  }
});

//vorige vraag
vorigeKnop.addEventListener("click", function() {
  if (huidigeVraag > 0) {
    huidigeVraag = huidigeVraag - 1;
    laadVraag();
  }
});

// Start met de eerste vraag
laadVraag();
