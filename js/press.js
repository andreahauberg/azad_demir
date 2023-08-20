const images = [
    "img/press1.png", "img/press2.png", "img/press3.png", "img/press4.png",
    "img/press5.png", "img/press6.png", "img/press7.png", "img/press8.png"
  ];
  
  let i = 0;
  
  function placeImage(x, y) {
    const nextImage = images[i];
  
    const img = document.createElement("img");
    img.setAttribute("src", nextImage);
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.transform = "translate(-50%, -50%) scale(0.1) rotate(" + (Math.random() * 20 - 10) + "deg)";
  
    const mainElement = document.querySelector("main");
    mainElement.appendChild(img); // Tilføj billedet til <main></main>
  
    i = i + 1;
  
    if (i >= images.length) {
      i = 0;
    }
  }
  
  function reloadPage() {
    location.reload();
  }
  
  window.addEventListener("resize", reloadPage);
  
  document.addEventListener("mousedown", function (event) {
    const mainElement = document.querySelector("main");
    if (event.target === mainElement) {
      event.preventDefault();
      placeImage(event.pageX, event.pageY);
    }
  });
  
  document.addEventListener("touchend", function (event) {
    const mainElement = document.querySelector("main");
    if (event.target === mainElement) {
      event.preventDefault();
      placeImage(event.pageX, event.pageY);
    }
  });
  