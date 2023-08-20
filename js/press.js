// Opretter et array der gør det muligt at placere flere værdier inde i samme variabel
const images = [
  "img/press1.png", "img/press2.png", "img/press3.png", "img/press4.png",
  "img/press5.png", "img/press6.png", "img/press7.png", "img/press8.png"
];

//variabel bruges til at holde styr på den aktuelle position i arrayet
let i = 0;

// Funktion til at placere et billede på skærmen med en given position (x, y)
function placeImage(x, y) {
  // Vælg næste billede fra array'et "images" baseret på den aktuelle værdi af i.
  const nextImage = images[i];

  // Opret et <img> element og sæt billedets kilde, position og transformation
  const img = document.createElement("img");
  img.setAttribute("src", nextImage);
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.transform = "translate(-50%, -50%) scale(0.1) rotate(" + (Math.random() * 20 - 10) + "deg)";

  // Find <main> elementet i dokumentet og tilføj billedet som et child
  const mainElement = document.querySelector("main");
  mainElement.appendChild(img); // Tilføj billedet til <main></main>

  // Opdater indekset "i" for at vælge det næste billede i array'et
  i = i + 1;

  // Hvis "i" er større eller lig med antallet af billeder, nulstil det til 0 for at starte forfra
  if (i >= images.length) {
    i = 0;
  }
}

// Funktion til at genindlæse siden
function reloadPage() {
  location.reload();
}

// Lyt efter ændringer i vinduets størrelse og kald "reloadPage" funktionen
window.addEventListener("resize", reloadPage);

// Lyt efter "mousedown" begivenheden (klik med musen) og placér et billede på det sted, hvor der er blevet klikket
document.addEventListener("mousedown", function (event) {
  const mainElement = document.querySelector("main");
  if (event.target === mainElement) {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
  }
});

// Lyt efter "touchend" begivenheden (berøringsslutning) og placér et billede på det sted, hvor der er blevet berørt
document.addEventListener("touchend", function (event) {
  const mainElement = document.querySelector("main");
  if (event.target === mainElement) {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
  }
});
