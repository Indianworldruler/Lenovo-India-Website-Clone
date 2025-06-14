let currentSlideIndex = 0;
        const totalSlides = 5;
        const slides = document.querySelectorAll('.carousel-slide-wrapper');
        const dots = document.querySelectorAll('.carousel-dot-item');

        function updateCarouselState() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active-slide-state', 'prev-slide-state');
                if (index === currentSlideIndex) {
                    slide.classList.add('active-slide-state');
                } else if (index < currentSlideIndex) {
                    slide.classList.add('prev-slide-state');
                }
            });

            dots.forEach((dot, index) => {
                dot.classList.toggle('active-dot-state', index === currentSlideIndex);
            });
        }

        function navigateCarousel(direction) {
            if (direction === 'next') {
                currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
            } else {
                currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
            }
            updateCarouselState();
        }

        function goToSlide(slideIndex) {
            currentSlideIndex = slideIndex;
            updateCarouselState();
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                navigateCarousel('prev');
            } else if (e.key === 'ArrowRight') {
                navigateCarousel('next');
            }
        });







function redirectToSignIn() {
  window.location.href = "signIn.html";
}









       




// --------------------------------------------------- Customization ----------------------------------------------------

  document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.getElementById("customization-toggle");
      const panel = document.getElementById("customization-panel");

      const bgColorPicker = document.getElementById("bg-color-picker");
      const textColorPicker = document.getElementById("text-color-picker");
      const fontSizeSelector = document.getElementById("font-size-selector");
      const darkModeToggle = document.getElementById("dark-mode-toggle");
      const spotlightToggle = document.getElementById("spotlight-toggle");
      const spotlightBtn = document.getElementById("spotlight-next");
      const spotlightPrevBtn = document.getElementById("spotlight-prev");

      const body = document.body;
      const paragraphs = document.querySelectorAll("p");
      let currentFocus = 0;

      // Customization Panel Toggle
      toggleButton.addEventListener("click", () => {
        panel.style.display = panel.style.display === "flex" ? "none" : "flex";
      });

      // Background Color
      bgColorPicker.addEventListener("input", (e) => {
        body.style.backgroundColor = e.target.value;
      });

      // Text Color
      textColorPicker.addEventListener("input", (e) => {
        body.style.color = e.target.value;
      });

      // Font Size
      fontSizeSelector.addEventListener("change", (e) => {
        body.style.fontSize = e.target.value;
      });

      // Dark Mode
      darkModeToggle.addEventListener("change", (e) => {
        body.classList.toggle("dark-mode", e.target.checked);
      });


      // Hide customization panel if clicked outside
      document.addEventListener("click", (e) => {
        if (!panel.contains(e.target) && !toggleButton.contains(e.target)) {
          panel.style.display = "none";
        }
      });
    })