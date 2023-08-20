//NAVIGATIONSMENU
const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

var video = document.querySelector("backgroundVideo");

function playVideo() {
  video.play()
    .then(function() {
      // Video started playing
    })
    .catch(function(error) {
      // Video playback was prevented
    });
}

// Autoplay video once everything is loaded
window.addEventListener("load", function () {
  playVideo();
});

// Autoplay video on user gesture (e.g., a tap)
document.addEventListener("click", function () {
  playVideo();
  // Remove click listener to prevent multiple plays on single click
  document.removeEventListener("click", this);
});
