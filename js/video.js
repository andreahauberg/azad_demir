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
    playVideo(this);
  });
}
