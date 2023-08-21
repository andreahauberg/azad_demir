window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top").style.display = "block";
  } else {
    document.getElementById("scroll-to-top").style.display = "none";
  }
};

document.getElementById("scroll-to-top").addEventListener("click", scrollToTop);

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel, index) => {
    const images = carousel.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((image, i) => {
        image.style.display = i === index ? "block" : "none";
      });
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    const isVideoCarousel = carousel.querySelector("video");
    const excludedIndices = [3, 4, 5, 9, 11, 12, 13];

    // Fjern controllere fra carousels med bestemte numre og videoer
    if (!isVideoCarousel && !excludedIndices.includes(index)) {
      const carouselControls = document.createElement("div");
      carouselControls.classList.add("carousel-controls");
      const prevButton = document.createElement("button");
      prevButton.textContent = "◀";
      prevButton.addEventListener("click", prevImage);
      const nextButton = document.createElement("button");
      nextButton.textContent = "▶";
      nextButton.addEventListener("click", nextImage);

      carouselControls.appendChild(prevButton);
      carouselControls.appendChild(nextButton);
      carousel.appendChild(carouselControls);
    }
  });
});
