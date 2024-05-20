document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider-inner');
    const slides = document.querySelectorAll('.projects__slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
  
    function showSlide(index) {
      const newIndex = (index + totalSlides) % totalSlides;
  
      slides.forEach((slide, i) => {
        if (i === newIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
  
      const translateValue = -newIndex * 100 + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
      currentIndex = newIndex;
    }
    const leftSelector = document.querySelector('.slider-control-prev');
    const rightSelector = document.querySelector('.slider-control-next');
   
    leftSelector.addEventListener('click', function (e) {
        showSlide(currentIndex - 1);
    });
    rightSelector.addEventListener('click', function (e) {
        showSlide(currentIndex + 1);
    });
  
    showSlide(currentIndex);
  });