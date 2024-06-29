document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider a");
    let currentIndex = 0;
    const slideCount = slides.length / 2; // Chunki biz rasmlarni takrorladik
    const slideInterval = 2000; // 2 sekund
  
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      const offset = -currentIndex * slides[0].clientWidth -50;
      slider.style.transform = `translateX(${offset}px)`;
      
      if (currentIndex === slideCount - 1) {
        setTimeout(function() {
          slider.style.transition = 'none';
          slider.style.transform = 'translateX(0)';
          currentIndex = 0;
          setTimeout(function() {
            slider.style.transition = 'transform 0.5s ease-in-out';
          }, 50);
        }, 500);
      }
    }
  
    setInterval(showNextSlide, slideInterval);
  });
  