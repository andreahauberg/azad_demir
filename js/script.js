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
  if (video.paused) {
    var playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(function() {
          // Video started playing
        })
        .catch(function(error) {
          // Autoplay was prevented
          // You might want to show a play button or other controls
        });
    }
  }
}

var videos = document.getElementsByClassName("backgroundVideo");

function playVideo(video) {
  if (video.paused) {
    var playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(function() {
          // Video started playing
        })
        .catch(function(error) {
          // Autoplay was prevented
          // You might want to show a play button or other controls
        });
    }
  }
}

// Autoplay videos once everything is loaded
window.addEventListener("load", function () {
  for (var i = 0; i < videos.length; i++) {
    playVideo(videos[i]);
  }
});

// Autoplay videos when they become visible in the viewport
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

// Autoplay videos when they are interacted with (tap/click) on mobile devices
for (var i = 0; i < videos.length; i++) {
  videos[i].addEventListener("click", function() {
    if (this.paused) {
      this.muted = false; // Unmute for user interaction
      playVideo(this);
    }
  });
}
