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

var videos = document.getElementsByClassName("backgroundVideo");

function playVideo(video) {
  video.play()
    .then(function() {
      // Video started playing
    })
    .catch(function(error) {
      // Video playback was prevented
    });
}

// Autoplay videos once everything is loaded
window.addEventListener("load", function () {
  for (var i = 0; i < videos.length; i++) {
    playVideo(videos[i]);
  }
});

// Autoplay videos when page is scrolled
window.addEventListener("scroll", function () {
  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];
    var videoPosition = video.getBoundingClientRect().top;
    var windowPosition = window.innerHeight;

    if (videoPosition - windowPosition <= 0) {
      playVideo(video);
    }
  }
});